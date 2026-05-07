<div align="center">

# 🤖 discordjs

<p align="center">
  <img src="https://img.shields.io/badge/Discord.js-5865F2?style=for-the-badge&logo=discord&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black"/>
</p>

<p align="center">
  <img src="https://img.shields.io/github/stars/abdulrahmanqdev/discordjs?style=flat-square&color=yellow"/>
  <img src="https://img.shields.io/github/forks/abdulrahmanqdev/discordjs?style=flat-square&color=green"/>
  <img src="https://img.shields.io/github/last-commit/abdulrahmanqdev/discordjs?style=flat-square&color=orange"/>
</p>

<p align="center">
  <strong>Discord botunuz için kullanabileceğiniz v14 boş altyapı.</strong><br/>
  Slash komutları, event handler ve Firebase desteğiyle hazır başlangıç şablonu.
</p>

</div>

---

## 📖 Genel Bakış

**discordjs**, Discord.js v14 kullanılarak hazırlanmış, modüler ve genişletilebilir bir Discord bot altyapısıdır. Slash komutları, event handler'lar ve Firebase entegrasyonuyla birlikte gelir. Kendi botunu hızlıca hayata geçirmek için temiz bir başlangıç noktası sunar.

---

## ✨ Özellikler

- ⚡ Discord.js v14 desteği
- 🗂️ Modüler slash komut yapısı (Public & Mod)
- 📡 Event handler sistemi
- 🔥 Firebase veritabanı entegrasyonu
- 🔧 Tek dosyadan kolay yapılandırma (`botConfig.js`)
- 🖱️ Windows için hazır `start.bat` başlatma dosyası
- 🛠️ Yardımcı fonksiyonlar için `tools.js`

---

## 🛠️ Teknoloji Yığını

| Teknoloji | Amaç |
|---|---|
| Discord.js v14 | Discord API Kütüphanesi |
| Node.js | Çalışma Ortamı |
| JavaScript | Dil |
| Firebase | Veritabanı |

---

## 🚀 Başlarken

### Gereksinimler
- Node.js `>= 18.x`
- [Discord Developer Portal](https://discord.com/developers/applications) üzerinden bir bot token'ı
- Firebase projesi ve `serviceAccountKey.json` dosyası

### Kurulum

```bash
git clone https://github.com/abdulrahmanqdev/discordjs.git
cd discordjs
npm install
```

### Yapılandırma

`Source/Config/botConfig.js` dosyasını düzenle:

```js
module.exports = {
  developersID: ["developerId"],
  token: "token",
  databaseURL: "firebase_database_url",
  serviceAccountKey: require('./serviceAccountKey.json'),

  playings: ["/yardım | !yardım"],
  prefixs: ["!"],
}
```

### Çalıştırma

**Linux / Mac:**
```bash
node index.js
```

**Windows:**
```
start.bat dosyasına çift tıkla
```

---

## 📁 Proje Yapısı

```
discordjs/
├── Source/
│   ├── Config/
│   │   └── botConfig.js          # Bot yapılandırması (token, prefix vb.)
│   ├── Events/
│   │   └── bot Events/           # Discord olayları
│   ├── Handlers/                 # Handler dosyaları
│   └── SlashCommands/
│       ├── Public/               # Herkese açık komutlar
│       └── mod System/            # Moderasyon komutları
├── index.js                      # Ana giriş noktası
├── tools.js                      # Yardımcı fonksiyonlar
├── start.bat                     # Windows başlatma dosyası
├── package.json
└── LICENSE
```

---

## 🤝 Katkıda Bulunma

1. Repoyu fork'la
2. Yeni komut veya özellik ekle
3. Pull Request aç

---

## 👤 Geliştirici

**@abdulrahmanqdev**
