const {app,BrowserWindow} = require("electron");

const nuevaVista = () => {
    const win = new BrowserWindow({
        width:1920,
        height:1080
    })

    win.loadFile("index.html")
}

app.whenReady().then(()=>{
    nuevaVista()
})