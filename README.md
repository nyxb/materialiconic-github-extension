# 🎩 MaterialIconic for GitHub: Unleash the Magic!

![Dark GitHub example][dark-github-example-src]
![Light GitHub example][light-github-example-src]

[![Chrome Web Store][chrome-web-store-src]][chrome-web-store-href]
[![Firefox Addons][firefox-addons-src]][firefox-addons-href]
[![Microsoft Edge Addons][microsoft-edge-addons-src]][microsoft-edge-addons-href]

**Step into the enchanting world of the [Chrome Web Store][chrome-web-store-href] | [Microsoft Edge Addons Store][microsoft-edge-addons-href] | [Firefox Addons][firefox-addons-href]**

---

[![Last enchanted with VSCode Theme v0.0.6][vscode-theme-src]][vscode-theme-href]

## 📚 The Spellbook

MaterialIconic for GitHub is a magical browser Extension that transforms the realm of github.com. Say goodbye to mundane file/folder icons and say hello to whimsical material design icons, each uniquely tailored to its file type, tool, and purpose in the project.

This spell is cast with the aid of the powerful [MaterialIconic Theme][materialiconic-theme-href] extension for Visual Studio Code. All icons and file assignments are conjured directly from this tome, so all praise or design concerns should be directed to the original grimoire.

## 🧪 Concoct Your Own Potion

Before brewing, remember to rename `example.env` to `.env` and whisper in your GitHub token.

```bash
pnpm build
```

## 🔮 Crystal Ball Gazing (Development)

Brew only the elixirs from the `src` folder, without re-summoning the spirits from [MaterialIconic Theme][materialiconic-theme-href]

```shell
pnpm build-src
```

Re-enchant the extension logos from `src/logo.svg`. Only required when `src/logo.svg` has undergone a metamorphosis.

```shell
pnpm rebuild-logos
```

Bind the `dist` folder into a scroll for transport to the Chrome Web Store and Firefox. _This script needs the Zip spell to be in your repertoire_

```shell
pnpm bundle
```

Speak the incantation to update the language-map.json with the latest linguistic contributions.

```shell
pnpm build-languages
```

---

## 📜 Scroll of Binding (License)

[MIT][license-href] - Crafted with 💞 by a team of magical beings.

<!-- Links & Images -->
[dark-github-example-src]: .github/assets/example-dark.png
[light-github-example-src]: .github/assets/example-light.png
[chrome-web-store-src]: https://raw.githubusercontent.com/nyxblabs/materialiconic-github-extension/main/.github/assets/chrome-web-store.png
[chrome-web-store-href]: https://chrome.google.com/webstore/detail/materialiconic-for-github/fmbmejhdmodclohjakpnidmnehjdcoak
[firefox-addons-src]: https://raw.githubusercontent.com/nyxblabs/materialiconic-github-extension/main/.github/assets/firefox-addons.png
[firefox-addons-href]: https://addons.mozilla.org/en-US/firefox/addon/materialiconic-for-github/
[microsoft-edge-addons-src]: https://raw.githubusercontent.com/nyxblabs/materialiconic-github-extension/main/.github/assets/microsoft-edge-addons.png
[microsoft-edge-addons-href]: https://microsoftedge.microsoft.com/addons/detail/material
