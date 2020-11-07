<template lang="pug">
  div
    #container
      #toolbar
        .toolbar-section
          button.wysiwyg-button(v-if='!hide.bold' :class="isBold ? 'wysiwyg-button-active' : ''" @click.prevent='bold')
            format-bold
          button.wysiwyg-button(v-if='!hide.italic' :class="isItalic ? 'wysiwyg-button-active' : ''" @click.prevent='italize')
            format-italic
          button.wysiwyg-button(v-if='!hide.underline' :class="isUnderlined ? 'wysiwyg-button-active' : ''" @click.prevent='underline')
            format-underline
          button.wysiwyg-button(v-if='!hide.strikethrough' :class="isStrikedThrough ? 'wysiwyg-button-active' : ''" @click.prevent='strikeThrough')
            format-strikethrough
          button.wysiwyg-button(v-if='!hide.heading' :class="isHeading ? 'wysiwyg-button-active' : ''" @click.prevent='showHeadings')
            format-header-1
        .toolbar-section
          button.wysiwyg-button(v-if='!hide.alignLeft' :class="isAlignedLeft ? 'wysiwyg-button-active' : ''" @click.prevent='alignLeft')
            format-align-left
          button.wysiwyg-button(v-if='!hide.alignCenter' :class="isAlignedCenter ? 'wysiwyg-button-active' : ''" @click.prevent='alignCenter')
            format-align-center
          button.wysiwyg-button(v-if='!hide.alignRight' :class="isAlignedRight ? 'wysiwyg-button-active' : ''" @click.prevent='alignRight')
            format-align-right
          button.wysiwyg-button(v-if='!hide.ol' @click.prevent='orderedList')
            format-list-numbered
          button.wysiwyg-button(v-if='!hide.ul' @click.prevent='insertUnorderedList')
            format-list-bulleted
        .toolbar-section
          button.wysiwyg-button(v-if='!hide.url' :class="showLinkForm ? 'wysiwyg-button-active' : ''" @click.prevent='showLinkOptions')
            b(style='font-size: 10px;') URL
          button.wysiwyg-button(v-if='!hide.table' :class="showTableForm ? 'wysiwyg-button-active' : ''" @click.prevent='showTableOptions')
            table-large
          button.wysiwyg-button(v-if='!hide.indent' @click.prevent='indent')
            format-indent-increase
          button.wysiwyg-button(v-if='!hide.outdent' @click.prevent='outdent')
            format-indent-decrease
        .toolbar-section
          button.wysiwyg-button(v-if='!hide.url', @click='showImage')
            v-icon() mdi-image-plus
      // OPTIONS
      #toolbar-options(v-if='showHeadingOptions')
        button.wysiwyg-button.wysiwyg-button-loop(v-for='size in hSizes' :key='size' @click.prevent='heading(size)') {{size}}
      #toolbar-options(v-if='showLinkForm')
        form(@submit.prevent='createLink')
          input(v-model='linkText' type='text' placeholder='Link Text' required='')
          input(v-model='linkURL' type='text' placeholder='URL' required='')
          button.wysiwyg-button(type='submit') Insert
          button.wysiwyg-button(@click.prevent="linkText = ''; linkURL = ''") Clear
      #toolbar-options(v-if='showTableForm')
        form(@submit.prevent='createTable')
          input(v-model='rows' min='0' type='number' placeholder='Rows' required='')
          input(v-model='cols' min='0' type='number' placeholder='Columns' required='')
          button.wysiwyg-button(type='submit') Insert
          button.wysiwyg-button(@click.prevent='rows = null; cols = null') Clear
        .hoverTableCont
          .hoverTable(@mouseleave='changeSelectedCell(0, 0)')
            .hoverRow(v-for='(row, key) in 12' :key='key')
              div(v-for='(col, key) in 12' :class="['hoverCell', { 'highlightCell': isHighlighted(row, col)}]" @mouseover='changeSelectedCell(row, col)' @click='setupCreateTable' :key='key')
          br
          #tableDimmensions
            em(v-if='noSelectedCell') Select boxes above
            em(v-else='') {{ this.selectedCell.cols }} x {{ this.selectedCell.rows }}
      #body(:style="{'height': `${height}px`}")
        #editor(contenteditable='' :style="{'min-height': `${height}px`}")
    insert-image(ref="aInsertImage" @insertImage="insertImage")
</template>

<script>
import 'vue-material-design-icons/styles.css';
import FormatAlignCenter from 'vue-material-design-icons/FormatAlignCenter.vue';
import FormatAlignLeft from 'vue-material-design-icons/FormatAlignLeft.vue';
import FormatAlignRight from 'vue-material-design-icons/FormatAlignRight.vue';
import FormatBold from 'vue-material-design-icons/FormatBold.vue';
import FormatHeader1 from 'vue-material-design-icons/FormatHeader1.vue';
import FormatIndentDecrease from 'vue-material-design-icons/FormatIndentDecrease.vue';
import FormatIndentIncrease from 'vue-material-design-icons/FormatIndentIncrease.vue';
import FormatItalic from 'vue-material-design-icons/FormatItalic.vue';
import FormatListBulleted from 'vue-material-design-icons/FormatListBulleted.vue';
import FormatListNumbered from 'vue-material-design-icons/FormatListNumbered.vue';
import FormatStrikethrough from 'vue-material-design-icons/FormatStrikethrough.vue';
import FormatUnderline from 'vue-material-design-icons/FormatUnderline.vue';
import TableLarge from 'vue-material-design-icons/TableLarge.vue';
import InsertImage from "@/views/ACMS/InsertImage/index";

export default {
  name: "ACMS",
  components: {
    InsertImage,
    FormatAlignCenter,
    FormatAlignLeft,
    FormatAlignRight,
    FormatBold,
    FormatHeader1,
    FormatIndentDecrease,
    FormatIndentIncrease,
    FormatItalic,
    FormatListBulleted,
    FormatListNumbered,
    FormatStrikethrough,
    FormatUnderline,
    TableLarge
  },
  props: {
    value: {
      type: String
    },
    hide: {
      type: Object,
      default: () => ({})
    },
    height: {
      type: [Number, String],
      default: 400
    }
  },
  data () {
    return {
      isBold: false,
      isItalic: false,
      isUnderlined: false,
      isStrikedThrough: false,
      isHeading: false,
      isAlignedLeft: false,
      isAlignedCenter: false,
      isAlignedRight: false,
      showToolbarOptions: false,
      showHeadingOptions: false,
      showLinkForm: false,
      linkText: '',
      linkURL: '',
      showTableForm: false,
      rows: null,
      cols: null,
      selectedCell: {
        rows: 0,
        cols: 0
      },
      caratSelection: null,
      savedPosition: null
    };
  },
  computed: {
    hSizes () {
      let sizes = [];
      for(let x = 1; x <= 6; x++) {
        sizes.push(`H${x}`);
      }
      sizes.push('Clear');
      return sizes;
    },
    noSelectedCell () {
      return this.selectedCell.rows === 0 && this.selectedCell.cols === 0;
    },
  },
  watch: {
    value: {
      handler (val) {
        if (val) {
          setTimeout(() => {
            if (!document.getElementById('editor').innerHTML) {
              document.getElementById('editor').innerHTML = val;
            }
          }, 100);
        }
      },
      immediate: true
    }
  },
  methods: {
    showImage(){
      this.$refs.aInsertImage.showDialog();
    },
    insertImage(file){

      this.exec('insertHTML', false, file);
      this.exec('insertHTML', false, '<div></div>');
    },
    /* -------------------------------------------- */
    bold () {
      this.isBold = !this.isBold;
      this.exec('bold');
    },
    italize () {
      this.isItalic = !this.isItalic;
      this.exec('italic');
    },
    underline () {
      this.isUnderlined = !this.isUnderlined;
      this.exec('underline');
    },
    strikeThrough () {
      this.isStrikedThrough = !this.isStrikedThrough;
      this.exec('strikeThrough');
    },
    heading (size) {
      this.exec('formatBlock', false, size === 'Clear' ? 'p' : size);
    },
    showHeadings () {
      this.isHeading = !this.isHeading;
      this.showHeadingOptions = !this.showHeadingOptions;
    },
    alignLeft () {
      this.isAlignedLeft = !this.isAlignedLeft;
      this.exec('justifyLeft');
    },
    alignCenter () {
      this.isAlignedCenter = !this.isAlignedCenter;
      this.exec('justifyCenter');
    },
    alignRight () {
      this.isAlignedRight = !this.isAlignedRight;
      this.exec('justifyRight');
    },
    showLinkOptions () {
      this.showLinkForm = !this.showLinkForm;
    },
    createLink () {
      let selected = document.getSelection();
      if (selected.anchorOffset === selected.extentOffset)
        selected = this.linkText;
      this.exec('insertHTML', false, `<a href='${this.linkURL}'>${selected}</a>`);
    },
    orderedList () {
      this.exec('insertOrderedList');
    },
    insertUnorderedList () {
      this.exec('insertUnorderedList');
    },
    showTableOptions () {
      if (!this.showTableForm) {
        this.caratSelection = document.getSelection();
        this.savedPosition = [ this.caratSelection.focusNode, this.caratSelection.focusOffset ];
      }
      this.showTableForm = !this.showTableForm;
    },
    generateTable (rows, cols) {
      let text = '';
      for (let row = 1; row <= rows; row++) {
        text += `<tr>`;
        for (let col = 1; col <= cols; col++) {
          text += `<td style="border: 1px solid lightgrey; padding: 2px;"></td>`;
        }
        text += `</tr>`;
      }
      return text;
    },
    setupCreateTable () {
      this.rows = this.selectedCell.rows;
      this.cols = this.selectedCell.cols;
      this.createTable();
    },
    createTable () {
      document.getElementById('editor').focus();
      this.caratSelection.collapse(this.savedPosition[0], this.savedPosition[1]);
      let table = `
        <table width="100%" style="border-collapse: collapse; border: 1px solid lightgrey;">
          <tbody>
            ${this.generateTable(this.rows, this.cols)}
          </tbody>
        </table>
      `;

      this.exec('insertHTML', false, table);
      this.showTableForm = false;
      this.caratSelection = null;
      this.savedPosition = null;
    },
    indent () {
      this.exec('indent');
    },
    outdent () {
      this.exec('outdent');
    },
    changeSelectedCell (row, col) {
      this.selectedCell.rows = row;
      this.selectedCell.cols = col;
    },
    isHighlighted (row, col) {
      if (this.noSelectedCell ) return false;
      if (row <= this.selectedCell.rows && col <= this.selectedCell.cols ) return true;
      return false;
    },
    exec (...args) {
      document.execCommand(...args);
    },
    getValue () {
      this.$emit('input', document.getElementById('editor').innerHTML);
    }
  },
  mounted () {
    let that = this;
    this.$nextTick(() => {
      document.getElementById('editor').addEventListener('input', function() {
        that.getValue();
      }, false);
    });
  },
}
</script>

<style scoped>
input {
  margin: 4px;
  padding: 2px;
  border: 1px solid lightgrey;
}

input:focus {
  outline: none;
}

#container {
  border: 1px solid lightgrey;
}

#body {
  overflow: auto;
  display: inline-block;
  width: 100%
}

#editor {
  padding: 10px;
}

#toolbar {
  min-height: 29px;
  border-bottom: 1px solid lightgrey;
  background-color: rgb(247, 247, 247);
}

#toolbar-options {
  min-height: 29px;
  border-bottom: 1px solid lightgrey;
  overflow: hidden;
}

#editor:focus {
  outline: none;
}

.toolbar-section {
  float: left;
  border-right: 1px solid lightgrey;
}

.wysiwyg-button {
  height: 28px;
  min-width: 30px;
  background-color: transparent;
  text-align: center;
  padding: 2px;
}

.wysiwyg-button:hover {
  background-color: lightblue;
}

/* .wysiwyg-button-active {
  background-color: lightblue;
} */

.wysiwyg-button-loop {
  margin-right: 4px;
}
.hoverTableCont {
  width: 230px;
  margin-right: 30px;
  float: left;
  padding: 15px 0px 0px 15px;
}
.hoverCell {
  border: 1px solid #aaa;
  height: 16px;
  width: 16px;
  margin: 0 1px 1px 0;
  float: left;
  cursor: pointer;
}
.hoverCell:hover {
  background-color: #4b67a1 !important;
}
.hoverRow {
  display: block;
  clear: both;
}
.highlightCell {
  background-color: #d1e0ff;
}
</style>