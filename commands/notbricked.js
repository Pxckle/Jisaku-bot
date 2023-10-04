module.exports = [{
  name: "notbricked",
  code: `
  $title[1;No, you are not bricked]
  $description[1;
If your power LED turns on and off after you installed b9s or your notification LED glows [any color but green](https://github.com/SciresM/boot9strap#led-status-codes), you are not bricked and are just missing a file called **boot.firm** in the root of your SD card

**How to fix the issue**
1. Check you inserted the SD card in your console
2. Place/replace the file, downloading it from https://github.com/LumaTeam/Luma3DS/releases

**Checking your SD for errors or corruption**
https://3ds.eiphax.tech/sderrors.html
Please read the instructions carefully.
  $color[1;00FF00]`
}]