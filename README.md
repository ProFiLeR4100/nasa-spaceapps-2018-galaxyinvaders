## Space Apps 2018 Challenge

**App for teachers and gamers**

1) Install **Node.JS** for your system, using installer from official `https://nodejs.org/en/download/current/`.
2) Run file `build.bat` if you are using windows or run command `grunt build` if you are using Unix/Linux/MacOS operation system.
3) Copy `default-config.json` that is located in folder `build` and rename copied file to `config.json`.
4) Configure `config.json` to your liking using **Configuring Widgets** paragraph.
5) Run file `start.bat` if you are using windows or run command `node server.js` if you are using Unix/Linux/MacOS operation system. 

---

## Configuring Widgets 

Widget types:
1) Bottom Line

## Bottom Line Widget

**Structure:**

1) Hierarchy: `root > bottomLine`
2) Parameters: `settings`, `zones`

**Parameters:**
1) `settings` - holds general settings for widget.
2) `zones` - holds components that are drawn inside info line.