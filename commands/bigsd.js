module.exports = [{
  name: "bigsd",
  $if: "old",
  code: `

  $if[$message[1]==3ds]
  $title[1;Big SD]
  $description[1;Although Nintendo says the official SD size limit is 32GB, the 3DS can accept cards up to 2TB.
In order to use them, you will have to format them to FAT32 first, follow the intructions here to format it:
https://wiki.hacks.guide/wiki/Formatting_an_SD_card]
  $color[1;00FF00]

  $elseIf[$message[1]==ns]
  $title[1;Big SD]
  $description[1;Although the Nintendo Switch supports large SD cards in EXFAT format, it is recommended to use FAT32.
In order to change the card's format, you will need to use an external utility, follow the intructions here if you need help to format it:
https://wiki.hacks.guide/wiki/Formatting_an_SD_card]
  $color[1;00FF00]

  $endelseIf

  $elseIf[$message[1]==nx]
  $title[1;Big SD]
  $description[1;Although the Nintendo Switch supports large SD cards in EXFAT format, it is recommended to use FAT32.
In order to change the card's format, you will need to use an external utility, follow the intructions here if you need help to format it:
https://wiki.hacks.guide/wiki/Formatting_an_SD_card]
  $color[1;00FF00]

  $endelseIf

  $elseIf[$message[1]==switch]
  $title[1;Big SD]
  $description[1;Although the Nintendo Switch supports large SD cards in EXFAT format, it is recommended to use FAT32.
In order to change the card's format, you will need to use an external utility, follow the intructions here if you need help to format it:
https://wiki.hacks.guide/wiki/Formatting_an_SD_card]
  $color[1;00FF00]

  $endelseIf

  $else
  Invalid! Please try again.

  $endIf
  
  $onlyIf[$message[1]!=;Please specify a console. Valid options are: 3ds, ns, nx, switch]`
}]