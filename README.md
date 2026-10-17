# Amin Aghakasiri — academic website

Personal research website for **https://amink8203.github.io/**.

A responsive, accessible static site built with plain HTML, CSS, and a small amount of JavaScript. No dependencies, accounts, analytics, or build step are required. The content remains readable without JavaScript; JavaScript adds project filtering and citation copying.

## Files to update

- `index.html`: biography, research interests, publications, projects, experience, education, and teaching.
- `assets/style.css`: typography, colors, and responsive layout.
- `assets/site.js`: project filters, citation copying, and navigation highlighting.
- `assets/Amin_Aghakasiri_CV.pdf`: public two-page CV, prepared for this website on 17 October 2026. The original application CV is unchanged.
- `assets/portrait.jpg`: profile photograph from Amin’s GitHub account.
- `sitemap.xml`: update the last-modified date when updating content.

Publication author order and review statuses follow the current `CV/CV.tex` as of 17 October 2026. Review statuses should be updated when decisions arrive. No equal-contribution designations are asserted. The manuscript link for AbductionBench is the Google Drive URL supplied by Amin.

## Preview locally

From this folder, run:

```sh
python -m http.server 8765 --bind 127.0.0.1
```

Open http://127.0.0.1:8765/ in a browser. You can also open `index.html` directly; copying a citation may select the text instead of accessing the clipboard.

## GitHub Pages

The repository is `Amink8203/amink8203.github.io`. The publishing branch should serve this folder’s contents from its root. The empty `.nojekyll` file keeps the site independent of Jekyll and its plugins.

In the repository’s **Settings → Pages**, select **Deploy from a branch**, the publishing branch, and **/(root)**, then save. GitHub Pages must be available for the repository’s existing visibility and the account’s plan. Keep the repository’s visibility unchanged unless the owner chooses otherwise.

The original Academic Pages template remains recoverable through Git history. The new site uses its own HTML and styles.
