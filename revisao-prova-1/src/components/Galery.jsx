import React from 'react';
import ItemImg from './ItemImg';


export default function Galery(){
    return(
        <div className="one-column content">
            <div className="inner-container" id='galeria'>
                <ItemImg src="https://secondpersonshooter.files.wordpress.com/2010/07/oblivion-dungeon.jpg" label="Abyss of Shadows"/>
                <ItemImg src="https://images.uesp.net/thumb/1/16/OB-place-Bloodcrust_Cavern.jpg/1200px-OB-place-Bloodcrust_Cavern.jpg" label="Crypt of the Ancient Kings"/>
                <ItemImg src="https://staticdelivery.nexusmods.com/mods/101/images/thumbnails/40392-2-1316475006.jpg" label="Lair of the Black Dragon"/>
                <ItemImg src="https://images.gog-statics.com/26472edf964b0904abad63d41854fcdc8fca3424c9dc9f927375c2806e060d1d_product_card_v2_mobile_slider_639.jpg" label="Maze of Doom"/>
                <ItemImg src="https://i.pinimg.com/736x/cf/6f/d5/cf6fd519fd70d800793ad16d2ef6f130.jpg" label="Deep Catacombs"/>
                <ItemImg src="https://levelexpeditionhome.files.wordpress.com/2019/05/20190511142630_1.jpg" label="Tunnels of Terror"/>
                <ItemImg src="https://pbs.twimg.com/media/FkVcE2sXoAAAZMe.jpg:large" label="Grotto of Dark Spirits"/>
                <ItemImg src="https://staticdelivery.nexusmods.com/mods/101/images/thumbnails/40392-4-1317166198.jpg" label="Forgotten Fortress"/>
                <ItemImg src="https://staticdelivery.nexusmods.com/mods/101/images/thumbnails/40392-1-1317172000.jpg" label="Cave of Challenges"/>
                <ItemImg src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgO_QUoGzkQMCEHVk8z86bBMFzwQvyFr8PTUHbrTTvBf55TqqDFvD1PzwsJ5ymlQH5lJc8Yhik7whSul2as8PxPNSKSWlozAQufPpEt66xUP2PW5aL7ftpa9xXhmR65M7P-5eeyd0Le1SFR/s1600/OblivionVilverinView.jpg" label="Vault of Ruin"/>
                <ItemImg src="https://images.uesp.net/3/36/OB-quest-Secrets_of_the_Ayleids.jpg" label="Hall of Riddles"/>
                <ItemImg src="https://cdnb.artstation.com/p/assets/images/images/011/850/249/large/darien-harvey-highresscreenshot00007.jpg?1531758193" label="Tower of Desolation"/>
            </div>
        </div>
    )
}