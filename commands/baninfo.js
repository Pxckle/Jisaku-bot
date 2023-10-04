module.exports = [{
  name: "baninfo",
  $if: "old",
  code: `

  $if[$message[1]==3ds]
  $title[1;3DS Bans]
  $description[1;**Nintendo has shown a marked lack of care about bans on the 3DS lately.**
However, such things as piracy and cheating online/cheating in multiplayer games have been known causes for NNID/console bans in the past.
eShop fraud (e.g. credit card chargebacks) will also get you banned.

You can enable online status and Spotpass/Streetpass as these do not seem to be high risk at this time.]
  $color[1;00FF00]

  $elseIf[$message[1]==ns]
  $title[1;[NX Bans](https://nx.eiphax.tech/ban.html)]
  $description[1;Bans on the Switch are complicated. Please click the embed header link and read the linked page to learn more.]
  $thumbnail[1;https://nintendohomebrew.com/assets/img/gunther.png]
  $color[1;00FF00]

  $endelseIf

  $elseIf[$message[1]==nx]
  $title[1;[NX Bans](https://nx.eiphax.tech/ban.html)]
  $description[1;Bans on the Switch are complicated. Please click the embed header link and read the linked page to learn more.]
  $thumbnail[1;https://nintendohomebrew.com/assets/img/gunther.png]
  $color[1;00FF00]

  $endelseIf

  $elseIf[$message[1]==switch]
  $title[1;[NX Bans](https://nx.eiphax.tech/ban.html)]
  $description[1;Bans on the Switch are complicated. Please click the embed header link and read the linked page to learn more.]
  $thumbnail[1;https://nintendohomebrew.com/assets/img/gunther.png]
  $color[1;00FF00]

  $endelseIf

  $else
  Invalid! Please try again.

  $endIf
  
  $onlyIf[$message[1]!=;Please specify a console. Valid options are: 3ds, ns, nx, switch]`
}]