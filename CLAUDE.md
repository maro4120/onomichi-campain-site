# 尾道レトロキャンペーンLP — クロコ用コンテキスト

## プロジェクト

デイトラ Web制作コース中級編の**最終課題**（DAY32-43）。
「#見つけて尾道レトロキャンペーン」の1ページLPを模写コーディング。

- **中級完走目標: 2026-07-31**
- 学習の記録・週報・Xポストは別リポジトリ `study-log` で管理（このリポジトリはコードのみ）

## ほめまろ / 口調

- 元警察官 → Web制作フリーランス挑戦中。目標は子どものそばで在宅・月15万円
- ClaudeCode を「**クロコ**」と呼ぶ
- **口調：関西弁混じりのカジュアル**（濃すぎず・高槻寄りで薄め）。励ましつつ、なぜそうなるか原理から説明する

## 技術スタック

- HTML / SCSS（Dart Sass）
- Swiper（CDN読み込み・about下部の自動スクロール帯）
- 画像は `img/`、SP用は `img/sp/`

## コーディング規約（重要な決めごと）

### vw() 関数（レスポンシブの核）
`sass/style.scss` 冒頭に定義。**375pxを基準**に、px→vw変換する。
- **正の値**: `min(◯px, △vw)` → 375px以上は固定・未満は等倍縮小
- **負の値**: `max(◯px, △vw)` → 同上（負は min だと壊れるため max で分岐）
- 使い方: `width: vw(200)` `top: vw(30)` など

### レスポンシブ方針
- **SP設計（375px基準）を vw() で等倍縮小**
- **PC（ブレイクポイント以上）は px で固定**（`@include mq(lg)` 等で上書き）
- ブレイクポイント・mixinは `$breakpoints` / `@mixin mq()` 参照（sm/md/lg/xl）
- UI部品（アイコン・ボタン）は原則 px 固定、ビジュアル（写真）は vw()

### 装飾の配置テク
- **画面端に固定**: `left: calc(50% - 50vw - ◯px)`（右は right）
- **中央から一定距離に固定**: `left: calc(50% - ◯px)`
- はみ出しは親の `overflow: hidden` で切る

### Swiper
- 「一定速度で流れ続ける」= `speed`長め + `autoplay.delay:0` + `.swiper-wrapper { transition-timing-function: linear !important }`
- 間隔・速度など**Swiper管理のものはJS**（`breakpoints`オプションでレスポンシブ）、幅・見た目はCSS
- セレクタはセクション内にネストしてスコープを閉じる（グローバル汚染防止）

### 画像
- 切り抜き・透過が要るものは **PNG/SVG**（JPGは透過不可＝白背景になる）
- 箱いっぱいに広げるには img に **`width: 100%`**（`max-width:100%` は上限であって広げない）

### 命名
- BEM。セクション共通の見出しは `.heading`（アイコン＋筆記体英字＋マーカー付き日本語）

## 進捗

- ✅ ヘッダー（PCナビ / SPドロワー / ハンバーガー×印アニメ）
- ✅ FV（重ね配置・レスポンシブ完成）
- ✅ about（テキストカード・装飾写真・Swiper・SP/PC完成）
- ⬜ **次: how-to-enter** → prizes → spots → qa → information → contact → footer

## 直近のTODO（任意）
- about の Swiperセレクタを `.about__slider` 内にネストしてスコープ化（未対応なら）