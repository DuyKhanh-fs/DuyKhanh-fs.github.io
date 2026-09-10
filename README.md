# Multi-page Portfolio

Files:
- `index.html` — Home page. Only featured projects are shown here.
- `projects.html` — Dedicated page for detailed project/product case studies.
- `resume.html` — Dedicated resume/CV page.
- `style.css` — Shared design system.
- `script.js` — Mobile navigation + scroll reveal.
- `assets/cv/CV.pdf` — Put your real CV PDF here.
- `image_0994ab.jpg` — Keep your existing portrait next to the HTML files, or change the paths.

## GitHub Pages
Upload all files/folders to the root of your GitHub Pages repository.

Recommended structure:

/
  index.html
  projects.html
  resume.html
  style.css
  script.js
  image_0994ab.jpg
  assets/
    cv/
      CV.pdf
    images/

## Edit first
Search and replace:
- `Your Name`
- `your.email@example.com`
- `github.com/your-username`
- `linkedin.com/in/your-profile`
- `href="#"` project source links

## Add more projects
Copy one `<article class="project-detail ...">...</article>` block in `projects.html`.
On the home page, keep only your 3 strongest featured projects.


## V2 updates
- Navigation order: Home → Projects → Capabilities → Contact → Resume.
- Contact redesigned as a 2x2 icon-card area with Email, GitHub, LinkedIn and Resume.
- Featured Work now has a stronger hover "pop" effect.
- Each featured project has a `Quick view` modal while the full case study remains on `projects.html`.
