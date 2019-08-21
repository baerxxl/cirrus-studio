import { BrowserWindow } from 'electron' // eslint-disable-line

function getCtrlHotkey(hotkey) {
  return process.platform === 'darwin' ? `Command+${hotkey}` : `Ctrl+${hotkey}`;
}

const mainMenuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'New File',
        accelerator: getCtrlHotkey('F'),
      },
      {
        label: 'Open File',
        accelerator: getCtrlHotkey('O'),
      },
      {
        label: 'Save File',
        accelerator: getCtrlHotkey('S'),
      },
    ],
  },
];

if (process.platform === 'darwin') {
  mainMenuTemplate.unshift({});
}

if (process.env.NODE_ENV === 'development') {
  mainMenuTemplate.push({
    label: 'Dev',
    submenu: [
      {
        label: 'Toggle Console',
        accelerator: getCtrlHotkey('D'),
        click() {
          const currentWindow = BrowserWindow.getFocusedWindow();
          currentWindow.webContents.openDevTools();
        },
      },
    ],
  });
}

export default mainMenuTemplate;
