function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'MIT') {
        return 'https://opensource.org/licenses/MIT';
    } else if (license === 'Apache') {
        return 'https://opensource.org/licenses/Apache-2.0';
    } else if (license === 'GPL') {
        return 'https://opensource.org/licenses/GPL-3.0';
    } else if (license === 'BSD') {
        return 'https://opensource.org/licenses/BSD-3-Clause';
    } else {
        return 'No License';
    }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'MIT') {
        return 'MIT License';
    } else if (license === 'Apache') {
        return 'Apache License';
    } else if (license === 'GPL') {
        return 'GNU General Public License';
    } else if (license === 'BSD') {
        return 'BSD License';
    } else {
        return 'No License';
    }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
`;
}

module.exports = generateMarkdown;