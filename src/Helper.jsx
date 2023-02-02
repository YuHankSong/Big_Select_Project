import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const Helper = () => {
    let user = JSON.parse(localStorage.getItem('user'));
    // all available props
    const theme = {
        background: 'white',
        fontFamily: 'Helvetica Neue',
        headerBgColor: '#F38243',
        headerFontColor: 'white',
        headerFontSize: '18px',
        botBubbleColor: '#F38243',
        botFontColor: 'white',
        userBubbleColor: '#FAF9F6',
        userFontColor: 'black',
    };
    const wish = '登入後進入「許願池」，點擊「發起許願」。只要你有想要的日本好物，都可以許願哦！';
    const collect = '許願完成後將會有 14 天時間讓大家集氣，集氣結束後，只要集氣數超過 50 的願望，我們就會進行評估，並找相關原廠商洽談！'
    const sell = 'Select Go 會收集這些高人氣願望逐一向日本原廠商洽談採購，確認過後許願就能成真，大家就可以購入想要的願望商品了！'
    return (
        <ThemeProvider theme={theme}>
            <ChatBot
                headerTitle="常見問題"
                steps={[
                    {
                        id: 'greeting',
                        message: '請問如何稱呼您？',
                        trigger: 'username'
                    },
                    {
                        id: 'username',
                        user: true,
                        trigger: 'greetName',
                    },
                    {
                        id: 'greetName',
                        message: '哈囉 {previousValue} ! 以下這些問題能幫助你嗎？',
                        // message: `哈囉 ${user ? user.displayName : ''} ! 以下這些問題能幫助你嗎？`,
                        trigger: 'questionOptions',
                    },
                    {
                        id: 'questionOptions',
                        options: [
                            { value: 1, label: '許願是什麼?', trigger: 'wish' },
                            { value: 2, label: '集氣是什麼？', trigger: 'collect' },
                            { value: 3, label: '什麼時候開賣？', trigger: 'sell' },
                            { value: 4, label: '沒問題了！', trigger: 'bye' },
                        ],
                    },
                    {
                        id: 'wish',
                        message: wish,
                        trigger: 'questionOptions',
                    },
                    {
                        id: 'collect',
                        message: collect,
                        trigger: 'questionOptions',
                    },
                    {
                        id: 'sell',
                        message: sell,
                        trigger: 'questionOptions',
                    },
                    {
                        id: 'bye',
                        message: '掰掰～有問題可以再來再問我呦！😁',
                        trigger: 'end'
                    },
                    {
                        id: 'end',
                        component: (
                            <div>
                                <a href="/" className='mr-5'>繼續逛逛</a>
                                <a href="/member">馬上加入</a>
                            </div>
                        ),
                        end: true,
                    },
                ]}
                floating={true}
                placeholder={'請輸入文字'}
                botAvatar={'/imgs/botAvatar.webp'}
                userAvatar={user && user.photoURL ? user.photoURL : '/imgs/avatar.png'}

            />
        </ThemeProvider>
    );
}

export default Helper;