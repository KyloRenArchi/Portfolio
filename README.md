# Arif Raihan — Architecture Portfolio

A ready-to-host static portfolio with six projects, responsive galleries and a PDF download. No installation or build step required.

## Publish on GitHub Pages

1. Create a GitHub repository, for example `portfolio`, with the default branch `main`.
2. Upload **the contents of this folder** to the repository root. `index.html`, `assets`, `projects` and `.github` must be at the root, not inside another folder. Make sure hidden files and `.github/workflows/deploy.yml` are included. GitHub Desktop is convenient for uploading the entire folder.
3. In the repository, open **Settings → Pages → Build and deployment → Source**, and choose **GitHub Actions**.
4. Open **Actions → Deploy portfolio to GitHub Pages → Run workflow** if it has not run automatically.
5. The completed deployment shows your website URL. A project repository uses `https://YOUR-USERNAME.github.io/portfolio/`; a repository called `YOUR-USERNAME.github.io` uses the root domain.

The relative links support either repository type without changes. GitHub Pages normally makes the website publicly accessible; use only material you want visitors to see.

## Edit

- Homepage: `index.html`
- Project pages: `projects/PROJECT-NAME/index.html`
- Appearance: `styles.css`
- Navigation, filters and image viewer: `site.js`
- Images and downloadable PDF: `assets/`

Keep image credits and project authorship when editing. Contact links use email and LinkedIn; there is no contact form or backend.

## Verification

Internal links, local image references, image descriptions, project credits and asset sizes have been checked. Desktop and 390px mobile browser previews checked. Project filters, mobile navigation, image viewer and gallery navigation verified. The current 31-page portfolio is included at original quality. Check your deployed URL after publishing.
