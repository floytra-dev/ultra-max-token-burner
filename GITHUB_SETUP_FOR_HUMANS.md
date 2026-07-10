# GitHub setup for humans

This guide assumes:

- you have barely used GitHub;
- the project is currently a ZIP file on your computer;
- you want a public repository that people can visit, star, download, and run;
- you do not want to learn Git before publishing it.

The easiest method is the GitHub website. A second method using GitHub Desktop is included afterward.

---

# Part 1. Create a GitHub account

1. Go to GitHub.
2. Create an account.
3. Confirm your email address.
4. Choose a username you are comfortable showing publicly.

Your public repository address will look like:

```text
https://github.com/YOUR-USERNAME/ultra-max-token-burner
```

---

# Part 2. Download and unpack the project

1. Download `ultra-max-token-burner.zip`.
2. Open your Downloads folder.
3. Double-click the ZIP file.
4. You should now have a folder named:

```text
ultra-max-token-burner
```

5. Open that folder and confirm that you can see:

```text
README.md
SKILL.md
AGENTS.md
CLAUDE.md
package.json
bin
src
examples
.github
.cursor
```

Important:

Upload the **contents of this folder**, not another folder containing it.

---

# Part 3. Create the repository

1. Sign in to GitHub.
2. Click the `+` button in the top-right corner.
3. Choose `New repository`.
4. Fill in the form exactly like this:

Repository name:

```text
ultra-max-token-burner
```

Description:

```text
Turn dangerously efficient prompts into manager-visible AI work.
```

Visibility:

```text
Public
```

Do not enable:

- Add a README file
- Add .gitignore
- Choose a license

Those files already exist in the project.

5. Click `Create repository`.

GitHub will open an empty repository page.

---

# Part 4. Upload the files without using Terminal

1. On the empty repository page, click:

```text
uploading an existing file
```

If you do not see that link:

1. Click `Add file`.
2. Choose `Upload files`.

2. Open the unpacked `ultra-max-token-burner` folder on your computer.
3. Select all files and folders inside it.
4. Drag them into the GitHub upload area.

Make sure hidden-looking folders are included:

```text
.github
.cursor
```

On macOS, folders whose names begin with a dot may be hidden. Press:

```text
Command + Shift + .
```

to show hidden files.

5. Wait until GitHub finishes listing the uploaded files.
6. In the commit message box, write:

```text
Initial Ultra Max release
```

7. Click:

```text
Commit changes
```

After a few moments, the repository homepage should show the formatted README.

---

# Part 5. Configure the repository page

On the repository homepage, find the `About` area on the right.

1. Click the gear icon next to `About`.
2. Set the description to:

```text
Turn dangerously efficient prompts into manager-visible AI work.
```

3. Set the website to:

```text
https://akapust.in/burner
```

4. Add these topics:

```text
prompt-engineering
ai-agents
developer-tools
satire
productivity
nodejs
claude-code
codex
cursor
github-copilot
```

5. Save changes.

The website and topics matter because they make the repository easier to understand and discover.

---

# Part 6. Pin the repository to your profile

1. Open your GitHub profile.
2. Find the `Popular repositories` or pinned-repositories section.
3. Click `Customize your pins`.
4. Select:

```text
ultra-max-token-burner
```

5. Save.

Now visitors to your profile can find the project immediately.

---

# Part 7. Test that the project actually runs

You need Node.js on your computer.

## Install Node.js

1. Go to the official Node.js download page.
2. Download the recommended LTS installer for your operating system.
3. Run the installer.
4. Accept the standard options.
5. Restart Terminal after installation.

## Open Terminal in the project folder on macOS

1. Open Finder.
2. Open the `ultra-max-token-burner` folder.
3. Right-click the folder while holding Control, or use Finder’s Services menu.
4. Choose `New Terminal at Folder`.

If that option is unavailable:

1. Open Terminal.
2. Type `cd ` including the space.
3. Drag the project folder into the Terminal window.
4. Press Enter.

## Verify Node.js

Run:

```bash
node --version
```

You should see a version number.

Then run:

```bash
npm --version
```

You should see another version number.

## Run the project

Inside the project folder, run:

```bash
npm install
```

Then:

```bash
node bin/token-burner.js \
  --mode ultra-max \
  --prompt "Write a Slack reply saying we need more time."
```

You should receive a large generated prompt in Terminal.

## Test audit mode

Run:

```bash
node bin/token-burner.js \
  --mode ultra-max \
  --prompt "Draft a client email about the delay." \
  --audit
```

You should also see a Burn Manifest with the chosen modules and seed.

---

# Part 8. Publish a cleaner first release

A GitHub Release gives people a clear downloadable version.

1. Open the repository.
2. In the right-hand column, find `Releases`.
3. Click `Create a new release`.
4. Click `Choose a tag`.
5. Enter:

```text
v1.0.0
```

6. Choose `Create new tag`.
7. Release title:

```text
Ultra Max Token Burner v1.0
```

8. Release notes:

```text
First public release.

- Medium, Max, and Ultra Max prompt expansion
- Controlled randomization
- Task-type adaptation
- Seeded reproducibility
- Local CLI with no API key
- Portable instructions for Codex, Claude Code, GitHub Copilot, and Cursor
```

9. Attach the ZIP file if GitHub allows it in the release form.
10. Click `Publish release`.

---

# Part 9. Make the repository look trustworthy

Check the repository homepage and confirm:

- the README appears automatically;
- the description is visible;
- the website points to `akapust.in/burner`;
- topics are visible;
- the MIT license is detected;
- there is a `v1.0.0` release;
- `SKILL.md` is easy to find;
- the example output is readable;
- there are no passwords, tokens, private notes, or API keys.

Never upload passwords, private keys, access tokens, or `.env` files.

---

# Part 10. Connect the website to GitHub

On the Token Burner website, the final unlocked state should link to the public repository.

Use buttons:

```text
Open GitHub
Copy MD Skill
Download .md
```

`Open GitHub` should point to:

```text
https://github.com/YOUR-USERNAME/ultra-max-token-burner
```

Replace `YOUR-USERNAME` with the actual username.

The README should already point back to:

```text
https://akapust.in/burner
```

This creates the loop:

```text
Website → complete Super Max → unlock skill → open GitHub
GitHub → understand project → visit website → generate certificate
```

---

# Part 11. How to update the project later

## Simplest web method

1. Open the file on GitHub.
2. Click the pencil icon.
3. Edit the text.
4. Click `Commit changes`.
5. Write a short description of the edit.
6. Confirm.

For multiple files:

1. Click `Add file`.
2. Choose `Upload files`.
3. Upload the updated versions.
4. Confirm replacement.
5. Commit changes.

## Better method once you are comfortable

Install GitHub Desktop.

1. Open GitHub Desktop.
2. Choose `File` → `Add local repository`.
3. Select the project folder.
4. Publish or connect it to the existing GitHub repository.
5. Edit files normally on your computer.
6. In GitHub Desktop, write a short summary.
7. Click `Commit to main`.
8. Click `Push origin`.

GitHub Desktop lets you update the repository without memorizing Git commands.

---

# Part 12. Recommended launch post

```text
I made a tool for people whose prompts have become dangerously efficient.

Ultra Max Token Burner turns ordinary requests into manager-visible AI work:
governance, stakeholder alignment, risk matrices, validation loops, 30/60/90 plans, and measurable procedural seriousness.

It runs locally, uses no API key, and makes no network calls.

Website:
https://akapust.in/burner

GitHub:
https://github.com/YOUR-USERNAME/ultra-max-token-burner
```

Replace `YOUR-USERNAME` before publishing.

---

# Final checklist

Before launch:

- [ ] GitHub account created
- [ ] ZIP unpacked
- [ ] Public repository created
- [ ] README option left unchecked during creation
- [ ] All files uploaded
- [ ] `.github` folder uploaded
- [ ] `.cursor` folder uploaded
- [ ] Repository description added
- [ ] Website URL added
- [ ] Topics added
- [ ] Repository pinned
- [ ] Node.js installed
- [ ] CLI tested
- [ ] Audit mode tested
- [ ] v1.0.0 release published
- [ ] Website points to GitHub
- [ ] README points to website
- [ ] No secrets uploaded
