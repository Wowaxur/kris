import React from 'react';
import './App.css';
import BlockItem from "./components/block-arrow/BlockItem";
import MainImg from './components/images/mainImg.webp'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import VkLogo from './components/images/vk.svg'
class App extends React.Component {
    render() {
        return (
            <div className="main">
            <div className={'Image'}>
            <img className={'MainImage'} src={MainImg}/>     </div>
                <div className={"Name"}>
                    <h3>KRISTINA</h3>
                </div>
                <BlockItem/>
                <div className={'ContainerBlock'}>
                <div className={'BlockContact'}>
                    <a target={"_blank"} href={'https://wa.me/79180892823'} className={"WhatsApp"}>
                        <WhatsAppIcon className="icon" />
                        <div>WhatsApp</div>
                    </a>
                </div>
                    <div className={'BlockContact'}>
                    <a  href={'http://t.me/Chris_Donch'} target={"_blank"} className={"Telegram"}>
                        <TelegramIcon className={'icon'}/>
                        Telegram</a>
                </div>
                    <div className={'BlockContact'}>
                    <a href={'https://www.instagram.com/kristina_donch/'} target={"_blank"} className={"Instagram"}>
                        <InstagramIcon className={'icon'}/>
                        Instagram</a>
                </div>
                    <div className={'BlockContact'}>
                    <a href={'https://vk.com/kristinka_donch'} className={"Link"} target={"_blank"}> <img src={VkLogo} className={'vkLogo'}/> </a>
                </div>
                </div>
            </div>
        );
    }
}

export default App;