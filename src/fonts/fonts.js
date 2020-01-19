import { createGlobalStyle } from 'styled-components';

import leagueSpartanboldWoff from '../fonts/leaguespartan-bold-webfont.woff';
import leagueSpartanboldWoff2 from '../fonts/leaguespartan-bold-webfont.woff2';
import centuryGothicWoff from '../fonts/GOTHIC745063ed9142edcdcdfaeed69c36e6d2.woff';
import centuryGothicWoff2 from '../fonts/GOTHIC745063ed9142edcdcdfaeed69c36e6d2.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'league_spartanbold';
        src: local('league_spartanbold'), local('leagueSpartanbold'),
        url(${ leagueSpartanboldWoff2 }) format('woff2'),
        url(${ leagueSpartanboldWoff }) format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: "CenturyGothic";
        url(${ centuryGothicWoff2 }) format('woff2'),
        url(${ centuryGothicWoff }) format('woff');
        font-weight: normal;
        font-style: normal;
    }
`;
