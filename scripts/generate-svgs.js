const fs = require('fs');
const path = require('path');

const features = [
  'ic_cloud.svg',
  'ic_safe.svg',
  'ic_free.svg',
  'ic_fast.svg',
  'ic_wallet.svg',
  'ic_bot.svg',
  'ic_groups.svg',
  'ic_privacy.svg',
  'ic_open.svg',
  'ic_fun.svg',
  'ic_videocall.svg',
  'ic_moments.svg',
  'ic_nearby.svg',
  'ic_miniprograms.svg'
];

const colors = {
  'ic_cloud.svg': '#1e88e5',
  'ic_safe.svg': '#43a047',
  'ic_free.svg': '#8e24aa',
  'ic_fast.svg': '#fdd835',
  'ic_wallet.svg': '#e53935',
  'ic_bot.svg': '#5e35b1',
  'ic_groups.svg': '#ec407a',
  'ic_privacy.svg': '#424242',
  'ic_open.svg': '#009688',
  'ic_fun.svg': '#ff9800',
  'ic_videocall.svg': '#d32f2f',
  'ic_moments.svg': '#42a5f5',
  'ic_nearby.svg': '#4caf50',
  'ic_miniprograms.svg': '#9c27b0'
};

const imagesDir = path.join(__dirname, '../public/images');

// Create the directory if it doesn't exist
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Create a simple SVG for each feature
features.forEach(feature => {
  const color = colors[feature] || '#1e88e5';
  const name = feature.replace('ic_', '').replace('.svg', '');
  
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
    <rect width="100" height="100" fill="none" />
    <circle cx="50" cy="50" r="40" fill="${color}" opacity="0.2" />
    <circle cx="50" cy="50" r="30" fill="${color}" opacity="0.4" />
    <circle cx="50" cy="50" r="20" fill="${color}" />
    <text x="50" y="55" font-family="Arial" font-size="10" fill="white" text-anchor="middle">${name}</text>
  </svg>`;
  
  fs.writeFileSync(path.join(imagesDir, feature), svg);
  console.log(`Created ${feature}`);
});

// Create a logo SVG
const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="50" viewBox="0 0 200 50">
  <rect width="200" height="50" fill="none" />
  <text x="10" y="35" font-family="Arial" font-size="24" font-weight="bold" fill="#1e88e5">POTATO</text>
  <text x="110" y="35" font-family="Arial" font-size="24" fill="#424242">CHAT</text>
</svg>`;

fs.writeFileSync(path.join(imagesDir, 'ic_header_logo.svg'), logoSvg);
console.log('Created ic_header_logo.svg');

console.log('All SVGs generated successfully!'); 