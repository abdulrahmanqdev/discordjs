<div align="center">

# 🤖 discordjs

<p align="center">
  <img src="https://img.shields.io/badge/Discord.js-5865F2?style=for-the-badge&logo=discord&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
</p>

<p align="center">
  <img src="https://img.shields.io/github/stars/abdulrahmanqdev/discordjs?style=flat-square&color=yellow"/>
  <img src="https://img.shields.io/github/forks/abdulrahmanqdev/discordjs?style=flat-square&color=green"/>
  <img src="https://img.shields.io/github/last-commit/abdulrahmanqdev/discordjs?style=flat-square&color=orange"/>
</p>

<p align="center">
  <strong>Discord.js ile geliştirilmiş özelleştirilebilir Discord botu.</strong><br/>
  Slash komutları, etkinlik işleyicileri ve modüler yapı ile hazır şablon.
</p>

</div>

---

## 📖 Genel Bakış

**discordjs**, Discord.js v14 kullanılarak geliştirilmiş modüler bir Discord bot şablonudur. Slash komutları, event handler'lar ve kolayca genişletilebilir yapısıyla kendi botunu saniyeler içinde hayata geçirebilirsin.

---

## ✨ Özellikler

- ⚡ Discord.js v14 desteği
- 🗂️ Modüler slash komut yapısı
- 📡 Etkinlik (event) handler sistemi
- 🔧 Kolay yapılandırma — sadece `.env` dosyasını doldur
- 🪵 Konsol loglama sistemi
- 🔄 Otomatik komut kaydı (global & guild)

---

## 🛠️ Teknoloji Yığını

| Teknoloji | Amaç |
|---|---|
| Discord.js v14 | Discord API Kütüphanesi |
| Node.js | Çalışma Ortamı |
| JavaScript | Dil |

---

## 🚀 Başlarken

### Gereksinimler
- Node.js `>= 18.x`
- Discord Bot Token ([Discord Developer Portal](https://discord.com/developers/applications))

### Kurulum

```bash
git clone https://github.com/abdulrahmanqdev/discordjs.git
cd discordjs
npm install
```

### Ortam Değişkenleri

`.env` dosyası oluştur:

```env
DISCORD_TOKEN=bot_tokenin_buraya
CLIENT_ID=uygulama_id_buraya
GUILD_ID=sunucu_id_buraya
```

### Çalıştır

```bash
node index.js
```

---

## 📁 Proje Yapısı

```
discordjs/
├── commands/           # Slash komutları
├── events/             # Discord etkinlik işleyicileri
├── index.js            # Ana giriş noktası
├── .env                # Ortam değişkenleri
└── package.json
```

---

## 🤝 Katkıda Bulunma

1. Repoyu fork'la
2. Yeni komut veya özellik ekle
3. Pull Request aç

---

## 👤 Geliştirici

**@abdulrahmanqdev**
