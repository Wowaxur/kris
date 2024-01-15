import React from 'react';
import './App.css';
import BlockItem from "./components/block-arrow/BlockItem";
import MainImg from './components/images/mainImg.webp'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import SvoiLoogo from './components/images/logo_2.png'
import VkLogo from './components/images/vk.svg'
class App extends React.Component {
    render() {
        return (
            <div className="main">
            <div className={'Image'}>
            <img className={'MainImage'} src={MainImg}/> </div>
                <div className={"Name"}>
                    <h3>Кристина Дончевская</h3>
                    <h5 className={'NameHeader'}>Руководитель партнерского направления
                        Г. Краснодар
                    </h5>
                </div>
                <BlockItem/>
                <div className={'ContainerBlock'}>
                    <div className={'WhatsappWrapper'}>
                <div className={'BlockContact'}>
                    <a target={"_blank"} href={'https://wa.me/79180303845'} className={"WhatsApp"}>
                        <WhatsAppIcon className="icon" />
                        <div>Рабочий</div>
                    </a>
                </div>
                    <div className={'BlockContact'}>
                        <a target={"_blank"} href={'https://wa.me/79180892823'} className={"WhatsApp"}>
                            <WhatsAppIcon className="icon" />
                            <div>Личный</div>
                        </a>
                    </div>
                    </div>
                    <div className={'BlockContact'}>
                    <a  href={'https://t.me/+4YItH4K3uuk5NTk6'} target={"_blank"} className={"Telegram"}>
                        <TelegramIcon className={'icon'}/>
                        Telegram</a>
                </div>
                    <div className={'BlockContact'}>
                    <a href={'https://www.instagram.com/svoi.live/'} target={"_blank"} className={"Instagram"}>
                        <InstagramIcon className={'icon'}/>
                        Instagram</a>
                </div>
                    <div className={'BlockContact'}>
                    <a href={'https://vk.com/svoi.live'} className={"Link"} target={"_blank"}> <img src={VkLogo} className={'vkLogo'}/> </a>
                </div>
                    <div className={'BlockContact'}>
                        <a href={'https://svoi.live'} className={"Link"} target={"_blank"}> <img className={'SvoiLogo'} src={SvoiLoogo} />
                      </a>
                    </div>

                </div>

            </div>
        );
    }
}

export default App;