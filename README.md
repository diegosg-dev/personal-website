# sgdev.es

A minimal, fast, dark-themed personal website and project directory for **sgdev.es**.

It is built with plain HTML, CSS, and JavaScript (no heavy build tools or frameworks to maintain), so it loads almost instantly and is easy to edit and host on an Ubuntu VPS.

## How to update your site (no coding needed)

All of your text, social links, and projects live in one file: **`site/content.js`**.

Open `site/content.js` to:
- Change your short introduction (`headline` and `summary`)
- Replace the placeholder social links (`GitHub`, `X`, `LinkedIn`, `Email`) with your real profiles, or delete any you don't use
- Add, edit, or remove items in the `projects` list (categories like `AI`, `Websites`, `Tools`, `Repos` automatically appear in the filter bar)

Save the file and refresh your browser—that's it.

## How to preview locally

You can simply open `site/index.html` in your browser, or run a tiny local server from this folder:

```bash
python3 -m http.server 8080 --directory site
```

Then visit `http://localhost:8080`.

## How to deploy on your Ubuntu VPS (behind Caddy / VPSAgent)

You have two easy options—pick whichever fits your VPS setup best:

### Option A: Serve the static files directly with Caddy (simplest)

Copy the `site/` folder onto your VPS (for example `/var/www/sgdev.es`) and add this to your VPS's Caddyfile:

```caddyfile
sgdev.es, www.sgdev.es {
    root * /var/www/sgdev.es
    encode zstd gzip
    file_server
}
```

### Option B: Run in Docker behind Caddy / VPSAgent

1. On your VPS, run:
   ```bash
   docker compose up -d --build
   ```
   This starts the site on port `8080` (you can change the port by running `PORT=3000 docker compose up -d`).

2. Point Caddy / VPSAgent for `sgdev.es` and `www.sgdev.es` to `localhost:8080`:
   ```caddyfile
   sgdev.es, www.sgdev.es {
       reverse_proxy localhost:8080
   }
   ```
