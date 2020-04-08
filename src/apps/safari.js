// https://support.apple.com/en-gb/guide/safari/cpsh003/mac
module.exports = {
  id: 'safari',
  title: 'Safari',
  category: 'Utility',
  sets: [
    {
      title: 'Scrolling',
      id: 'scrolling',
      version: 1,
      shortcuts: [
        {
          title: 'Scroll up',
          keys: ['ArrowUp'],
        },
        {
          title: 'Scroll down in larger increments',
          keys: ['Alt', 'ArrowDown'],
        },
        {
          title: 'Scroll down a screen',
          keys: ['Space'],
        },
        {
          title: 'Scroll up a screen',
          keys: ['Shift', 'Space'],
        },
        {
          title: 'Scroll to the top-left corner of the page',
          keys: ['Meta', 'ArrowUp'],
        },
        {
          title: 'Scroll to the bottom-left corner of the page',
          keys: ['Meta', 'ArrowDown'],
        },
      ],
    },
    {
      title: 'Tabs',
      id: 'tabs',
      version: 1,
      shortcuts: [
        {
          title: 'Show all tabs',
          keys: ['Shift', 'Meta', '\\'],
        },
        {
          title: 'Make the next tab the active tab',
          keys: ['Control', 'Tab'],
        },
        {
          title: 'Make the previous tab the active tab',
          keys: ['Control', 'Shift', 'Tab'],
        },
        {
          title: 'Select the second tab',
          keys: ['Meta', '2'],
        },
        {
          title: 'Reopen the last tab you closed',
          keys: ['Shift', 'Meta', 't'],
        },
      ],
    },
    {
      title: 'Layout',
      id: 'layout',
      version: 1,
      shortcuts: [
        {
          title: 'Zoom in',
          keys: [
            ['Meta', '='],
            ['Meta', '+'],
          ],
        },
        {
          title: 'Zoom out',
          keys: ['Meta', '-'],
        },
        {
          title: 'Actual size',
          keys: ['Meta', '0'],
        },
        {
          title: 'Exit full-screen view',
          keys: ['Escape'],
        },
      ],
    },
    {
      title: 'Reading List',
      id: 'reading',
      version: 1,
      shortcuts: [
        {
          title: 'Toggle the Reading List sidebar',
          keys: ['Control', 'Meta', '2'],
        },
        {
          title: 'Add the current page to the Reading List',
          keys: ['Shift', 'Meta', 'd'],
        },
      ],
    },
    {
      title: 'Bookmarks',
      id: 'bookmarks',
      version: 1,
      shortcuts: [
        {
          title: 'Toggle the Bookmarks sidebar',
          keys: ['Control', 'Meta', '1'],
        },
        {
          title: 'Select the next bookmark or folder',
          keys: ['ArrowDown'],
        },
        {
          title: 'Open the selected bookmark',
          keys: ['Space'],
        },
        {
          title: 'Open the selected folder',
          keys: ['ArrowRight'],
        },
        {
          title: 'Close the selected folder',
          keys: ['ArrowLeft'],
        },
        {
          title: 'Change the name or address of a bookmark',
          keys: ['Enter'],
        },
        {
          title: 'Cancel editing a bookmark name in the sidebar',
          keys: ['Escape'],
        },
        // duplicated
        // {
        //   title: 'Finish editing a bookmark name',
        //   keys: ['Enter'],
        // },
        {
          title: 'Delete a bookmark',
          keys: ['Backspace'],
        },
      ],
    },
    {
      title: 'Miscellaneous',
      id: 'miscellaneous',
      version: 1,
      shortcuts: [
        {
          title: 'Highlight the next item on a web page',
          keys: ['Tab'],
        },
        {
          title: 'Close Reader',
          keys: ['Escape'],
        },
      ],
    },
  ],
}
