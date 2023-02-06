import * as fs from 'fs'

function getColors() {
  var string = ""
    let colors = figma.getLocalPaintStyles()
    for (var color of colors) {
      let config = color.paints[0] as SolidPaint

      string += `let ${color.name} = UIColor(r: ${config.color.r}, g: ${config.color.g}, b: ${config.color.b}, alpha: ${config.opacity ?? 1})\r\t`
    }

    console.log(string)

    fs.writeFile('/Users/joe/test.txt', string, err => {
      if (err) {
        console.error(err);
      }

      console.log("file written successfully")

    });
}

getColors()

figma.closePlugin()