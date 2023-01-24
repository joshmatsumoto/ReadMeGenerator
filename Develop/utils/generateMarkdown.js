// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license){
  const lforb = mit
  license.split(' ')
  license.join('_')
  return lforb
  }else{
    return
  }}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license){
    if(license.match('MIT')){
      const MITL = 'https://opensource.org/licenses/MIT'
      
    }
    else if(license.match('Unlicense')){
      var lforl = 'http://unlicense.org/'
      
    }
    else if(license.match('WTFPL')){
      var lforl = 'http://www.wtfpl.net/about/'
      
    }
  }else{return}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return  `
    # ${data.title}

    #Badges

    [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    ## Description
    
    ${data.description}
    
    ## Table of Contents
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contribution](#contribution)
    - [Test](#test)
    - [Questions](#questions)

    ## Installation
    
    ${data.install}
    
    ## Usage
    
    ${data.usage}
    
    
    ## License
    
    ${data.lisc}
    
    ## Contribution
    
    ${data.contribution}

    ## Tests

    ${data.test}

    ##Questions?

    Github: [${data.github}](https://github.com/${data.github})

    Email: [${data.email}](mailto:${data.email})
    `

;
}

module.exports = generateMarkdown;

// {name:'Apache 2.0', 
// link:'[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'},

// {name:'Boost Software License 1.0',
// link:'[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)' },

// {name:'BSD 3-Clause License',
// link:'[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)' },

// {name:'BSD 2-Clause License',link:'[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)' },

// {name:'CC0',
// link: '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)'},

// {name:'Attribution 4.0 International',
// link:'[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)' },

// {name:'Attribution-ShareAlike 4.0 International',
// link: '[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)'},

// {name:'Attribution-NonCommercial 4.0 International',
// link:'[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)' },

// {name:'Attribution-NoDerivates 4.0 International',
// link:'[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)' },

// {name:'Attribution-NonCommmercial-ShareAlike 4.0 International',
// link:'[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)'},

// {name:'Attribution-NonCommercial-NoDerivatives 4.0 International',
// link: '[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)'},

// {name:'Eclipse Public License 1.0',
// link: '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'},

// {name:'GNU GPL v3',
// link: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'},

// {name:'GNU GPL v2',
// link:'[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'},

// {name:'GNU AGPL v3',
// link:'[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)' },

// {name:'GNU LGPL v3',
// link:'[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)' },

// {name:'GNU FDL v1.3', 
// link:'[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)' },

// {name:'The Hippocratic License 2.1', 
// link:' [![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)' },

// {name:'The Hippocratic License 3.0',
// link: '[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)'},

// {name:'IBM Public License Version 1.0',
// link: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'},

// {name:'ISC License (ISC)',
// link:'[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)' },

// {name:'The MIT License',
// link:'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)' },

// {name:'Mozilla Public License 2.0',
// link: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'},

// {name:'Attribution License (BY)',
// link: '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)'},

// {name:'Open Database License (ODbL)',
// link: '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)'},

// {name:'Public Domain Dedication and License (PDDL)',
// link:'[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)' },

// {name:'The Perl License',
// link:'[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)' },

// {name:'The Artistic License 2.0',
// link: '[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'},

// {name:'SIL Open Font License 1.1',
// link: '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)'},

// {name:'The Unlicense',
// link:'[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)' },

// {name:'The Do What the F$%^ You Want to Public License',
// link: '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)'},

// {name:'The zlib/libpng License',
// link: '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)'},