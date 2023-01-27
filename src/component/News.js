import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'  //short impt


export class News extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 5,
        category:"general"
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

  //   articles = [
  //         {
  //           source: { id: null, name: "Abplive.com" },
  //           author: "ABP News Bureau",
  //           title:
  //             "Breaking News Live: Govt Should Show Video It Claims It Has, Cong's Rashid Alvi Backs Digvijaya Singh On Surgi - ABP Live",
  //           description:
  //             "Breaking News LIVE: Follow this page for all the updates and Breaking News from India and around the world.",
  //           url: "https://news.abplive.com/news/breaking-news-live-updates-january-27-pm-modi-congress-weather-update-delhi-cm-kejriwal-rahul-gandhi-bharat-jodo-yatra-pariksha-pe-charcha-kashmir-banihal-1578251",
  //           urlToImage:
  //             "https://feeds.abplive.com/onecms/images/uploaded-images/2023/01/27/e782ef8320a29e24cebcae4f001ab92a1674793837792594_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628",
  //           publishedAt: "2023-01-27T04:36:05Z",
  //           content:
  //             "Breaking News LIVE: Hello and welcome to ABP Live. Follow ABP Live's blog to get the latest developments, breaking news, latest updates, and other developing stories across the country and abroad.\r\nP… [+1866 chars]",
  //         },
  //         {
  //           source: { id: null, name: "NDTV News" },
  //           author: null,
  //           title:
  //             "Republic Day 2023: Here's Why Republic Day Is Celebrated On January 26 - NDTV",
  //           description:
  //             "India is celebrating its 74th Republic Day this year with a grand parade at Kartavya Path.",
  //           url: "https://www.ndtv.com/india-news/republic-day-2023-heres-why-republic-day-is-celebrated-on-january-26-3722554",
  //           urlToImage:
  //             "https://c.ndtvimg.com/2023-01/mm3eujno_republic-day-preparation-pti-650_625x300_25_January_23.jpg",
  //           publishedAt: "2023-01-27T04:03:50Z",
  //           content:
  //             "People hold Indian flag at a workshop ahead of the Republic Day celebrations, in Nagpur. (PTI Photo)\r\nIndia is celebrating its 74th Republic Day this year. Abdel Fattah El-Sisi, the President of Egyp… [+3186 chars]",
  //         },
  //         {
  //           source: { id: null, name: "YouTube" },
  //           author: null,
  //           title:
  //             "India's First Home-Grown HPV Vaccine Launched: 6 Things to Know - The Quint",
  //           description:
  //             "India's first indigenous human papillomavirus (HPV) vaccine, developed by the Serum Institute of India (SII), was launched on Tuesday, 24 January. Here are 6...",
  //           url: "https://www.youtube.com/watch?v=MGBpy9Lp3us",
  //           urlToImage:
  //             "https://i.ytimg.com/vi/MGBpy9Lp3us/maxres2.jpg?sqp=-oaymwEoCIAKENAF8quKqQMcGADwAQH4AbYIgAKAD4oCDAgAEAEYZSBHKFgwDw==&rs=AOn4CLD8RfM1b80vGZuvhOhUBHkOpeZ-4A",
  //           publishedAt: "2023-01-27T03:50:24Z",
  //           content: null,
  //         },
  //         {
  //           source: { id: null, name: "Hindustan Times" },
  //           author: "Shishir Gupta",
  //           title:
  //             "UK to play third umpire on Kashmir during Pakistan Army chief’s visit - Hindustan Times",
  //           description:
  //             "Despite India taking over Britain in terms of economy and global clout, UK still harbours illusions over the Indian sub-continent and likes to play in the Af-Pak region with the help of Pakistan. The Taliban takeover of Kabul in 2021 has been the disastrous c…",
  //           url: "https://www.hindustantimes.com/world-news/uk-to-play-third-umpire-on-kashmir-during-pakistan-army-chief-s-visit-101674790358308.html",
  //           urlToImage:
  //             "https://images.hindustantimes.com/img/2023/01/27/1600x900/pak_1674790486742_1674790495372_1674790495372.jpeg",
  //           publishedAt: "2023-01-27T03:36:31Z",
  //           content:
  //             "It has been 75 years since India and Pakistan achieved independence from Imperial Britain amidst a paroxysm of sub-continental violence that killed millions of Indians during the partition. Today, In… [+4956 chars]",
  //         },
  //         {
  //           source: { id: null, name: "Jagran.com" },
  //           author: "Ashish Singh",
  //           title:
  //             "OnePlus Pad Likely To Launch On February 7 Along With Next Generation Flagship Phones: Report - Jagran English",
  //           description: "",
  //           url: "https://english.jagran.com/technology/oneplus-pad-likely-to-launch-on-february-7-along-with-next-generation-flagship-phones-report-10062665",
  //           urlToImage:
  //             "https://imgeng.jagran.com/images/2023/jan/OnePlus Pad1674790442401.jpg",
  //           publishedAt: "2023-01-27T03:30:48Z",
  //           content:
  //             "The Chinese technology company, which is preparing to launch its flagship phone, the OnePlus 11, as well as the OnePlus 11R, OnePlus Buds Pro 2, and the OnePlus flagship TV series, is rumoured to be … [+1726 chars]",
  //         },
  //         {
  //           source: { id: null, name: "Moneycontrol" },
  //           author: "Bloomberg",
  //           title:
  //             "Adani lines up detailed response to ‘bogus’ short seller report - Moneycontrol",
  //           description:
  //             "The Adani Group held the call with fixed-income investors after US short seller Hindenburg Research leveled a series of extraordinary allegations about the sprawling conglomerate.",
  //           url: "https://www.moneycontrol.com/news/business/adani-lines-up-detailed-response-to-bogus-short-seller-report-9945151.html",
  //           urlToImage:
  //             "https://images.moneycontrol.com/static-mcnews/2023/01/GettyImages-1242727527-687x435.jpg",
  //           publishedAt: "2023-01-27T03:13:35Z",
  //           content:
  //             "Companies linked to Indian billionaire Gautam Adani plan a detailed response Friday to a short sellers report that they labeled as bogus, according to bondholders who participated in a conference cal… [+1819 chars]",
  //         },
  //         {
  //           source: { id: "the-times-of-india", name: "The Times of India" },
  //           author: "etimes.in",
  //           title:
  //             "Abdu Rozik joins fans outside Shah Rukh Khan's 'Mannat' for a chance to meet the 'Pathaan' star; says 'on - Indiatimes.com",
  //           description:
  //             "Abdu Rozik, ‘Bigg Boss 16’ fame, joined fans outside Shah Rukh Khan’s Mannat as he waited for his chance to meet hi",
  //           url: "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/abdu-rozik-joins-fans-outside-shah-rukh-khans-mannat-for-a-chance-to-meet-the-pathaan-star-says-only-one-dream-left-watch-video/articleshow/97362940.cms",
  //           urlToImage:
  //             "https://static.toiimg.com/thumb/msid-97362940,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-22612/97362940.jpg",
  //           publishedAt: "2023-01-27T02:42:00Z",
  //           content: null,
  //         },
  //         {
  //           source: { id: null, name: "Hindustan Times" },
  //           author: "HT Sports Desk",
  //           title:
  //             "Sania Mirza-Rohan Bopanna Australian Open 2023 Mixed Doubles Final Live score - Hindustan Times",
  //           description:
  //             "Sania Mirza Rohan Bopanna vs Luisa Stefani Rafael Matos Australian Open 2023 Final Live Score: Sania Mirza and Rohan Bopanna are set to cross swords with the Brazilian pair of Luisa Stefani and Rafael Matos at the iconic Rod Laver Arena.",
  //           url: "https://www.hindustantimes.com/sports/tennis/sania-mirza-rohan-bopanna-vs-luisa-stefani-rafael-matos-australian-open-2023-mixed-doubles-final-live-score-aus-open-final-sania-mirza-grand-slam-final-101674762073275.html",
  //           urlToImage:
  //             "https://images.hindustantimes.com/img/2023/01/26/1600x900/sania_1674764397759_1674764404591_1674764404591.JPG",
  //           publishedAt: "2023-01-27T02:35:17Z",
  //           content:
  //             "Australian Open final Live Score: A fitting farewell awaits!\r\n2022 was supposed to be Sania's final season on tour having announced retirement earlier last year. This Australian Open was never part o… [+411 chars]",
  //         },
  //         {
  //           source: { id: "the-times-of-india", name: "The Times of India" },
  //           author: "Sourav Modak",
  //           title:
  //             "India vs New Zealand, 1st T20I: Young guns have chance to fire and shine - Indiatimes.com",
  //           description:
  //             "Cricket News: A three-match T20 International series ahead of Border-Gavaskar Trophy and the big-ticket ICC event, the 50-over World Cup later in the year, feels mu",
  //           url: "https://timesofindia.indiatimes.com/sports/cricket/new-zealand-in-india/india-vs-new-zealand-1st-t20i-young-guns-have-chance-to-fire-and-shine/articleshow/97362752.cms",
  //           urlToImage:
  //             "https://static.toiimg.com/thumb/msid-97362730,width-1070,height-580,imgsize-36396,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
  //           publishedAt: "2023-01-27T02:34:00Z",
  //           content: "",
  //         },
  //         {
  //           source: { id: null, name: "NDTV News" },
  //           author: null,
  //           title:
  //             '"Can\'t Go Without...": JD(U) Leader After Nitish Kumar Asks Him To Quit - NDTV',
  //           description:
  //             "Bihar Chief Minister Nitish Kumar has asked his party colleague and parliamentary board chairman Upendra Kushwaha to quit the JD(U).",
  //           url: "https://www.ndtv.com/india-news/bihar-chief-minister-nitish-kumar-asks-upendra-kushwaha-to-quit-jd-u-amid-rumours-of-joining-bjp-3727699",
  //           urlToImage:
  //             "https://c.ndtvimg.com/2021-03/j19q5p0g_upendra-kushwaha-nitish-kumar-650_625x300_14_March_21.jpg",
  //           publishedAt: "2023-01-27T02:24:00Z",
  //           content:
  //             "Upendra Kushwaha retorted saying that he could not leave the party. (File)\r\nPatna: Bihar Chief Minister Nitish Kumar has asked his party colleague and parliamentary board chairman Upendra Kushwaha to… [+2147 chars]",
  //         },
  //         {
  //           source: { id: "the-times-of-india", name: "The Times of India" },
  //           author: "ETMarkets.com",
  //           title:
  //             "Stocks in news: Tata Motors, Dr Reddy’s, Adani Enterprises, Bajaj Fin, Vedanta, CEAT, Tata Elxsi - Economic Times",
  //           description:
  //             "Dr Reddy's Laboratories beat Street estimates by reporting a 77% on-year rise in December quarter net profit to Rs 1,247 crore. Revenue jumped 27% YoY higher to Rs 6,770 crore. During the quarter, the company's gross margin increased to 59.2% up from 53.8% in…",
  //           url: "https://economictimes.indiatimes.com/markets/stocks/news/stocks-in-news-tata-motors-dr-reddys-adani-enterprises-bajaj-fin-vedanta-ceat-tata-elxsi/articleshow/97362376.cms",
  //           urlToImage:
  //             "https://img.etimg.com/thumb/msid-97362356,width-1070,height-580,imgsize-56400,overlay-etmarkets/photo.jpg",
  //           publishedAt: "2023-01-27T02:04:00Z",
  //           content:
  //             "The February contract of Nifty50 on the Singapore Exchange indicates a positive start for domestic equities on Friday. The contract was trading at 83 points or 0.46% higher from the previous close. F… [+4433 chars]",
  //         },
  //         {
  //           source: { id: null, name: "Hindustan Times" },
  //           author: "HT Entertainment Desk",
  //           title:
  //             "Pathaan box office: Shah Rukh Khan film collects ₹70 cr in Hindi on day 2 - Hindustan Times",
  //           description:
  //             "Pathaan box office: The Shah Rukh Khan, Deepika Padukone and John Abraham-starrer collected around ₹70 crore in Hindi on day 2, the Republic Day holiday. | Bollywood",
  //           url: "https://www.hindustantimes.com/entertainment/bollywood/pathaan-box-office-shah-rukh-khan-film-collects-rs-70-cr-in-hindi-on-day-2-101674782374882.html",
  //           urlToImage:
  //             "https://images.hindustantimes.com/img/2023/01/27/1600x900/pathaan_box_office_1674784361026_1674784394442_1674784394442.jpg",
  //           publishedAt: "2023-01-27T01:58:45Z",
  //           content:
  //             "Pathaan is breaking records ever since its release on Wednesday. After becoming the highest Bollywood opener, the Hindi version of the Siddharth Anand directorial went on to collect around 70 crore o… [+1897 chars]",
  //         },
  //         {
  //           source: { id: "google-news", name: "Google News" },
  //           author: null,
  //           title: "Nurturing a nutrient-rich routine - The New Indian Express",
  //           description: null,
  //           url: "https://news.google.com/__i/rss/rd/articles/CBMiaGh0dHBzOi8vd3d3Lm5ld2luZGlhbmV4cHJlc3MuY29tL2NpdGllcy9kZWxoaS8yMDIzL2phbi8yNy9udXJ0dXJpbmctYS1udXRyaWVudC1yaWNoLXJvdXRpbmUtMjU0MTgzNy5odG1s0gFnaHR0cHM6Ly93d3cubmV3aW5kaWFuZXhwcmVzcy5jb20vY2l0aWVzL2RlbGhpLzIwMjMvamFuLzI3L251cnR1cmluZy1hLW51dHJpZW50LXJpY2gtcm91dGluZS0yNTQxODM3LmFtcA?oc=5",
  //           urlToImage: null,
  //           publishedAt: "2023-01-27T00:53:00Z",
  //           content: null,
  //         },
  //         {
  //           source: { id: null, name: "VOGUE India" },
  //           author: "Woodstock Witch",
  //           title: "Horoscope Today: January 27, 2023 - VOGUE India",
  //           description:
  //             "Vogue Daily Horoscope, 27th January 2022: Today's prediction for all zodiac signs: Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces. Check out our daily horoscope for free",
  //           url: "https://www.vogue.in/horoscope/collection/horoscope-today-january-27-2023/",
  //           urlToImage:
  //             "https://media.vogue.in/wp-content/uploads/2021/12/Daily-Horoscope-1920x1080.jpg",
  //           publishedAt: "2023-01-27T00:30:28Z",
  //           content:
  //             "Lo and behold, Virgo! The gates of prosperity are being opened for you and its now time for you to walk through the portal joyfully and with a loving heart. You deserve every bit of the success and a… [+1589 chars]",
  //         },
  //         {
  //           source: { id: null, name: "Hindustan Times" },
  //           author: "AP",
  //           title:
  //             "US special forces kill senior Islamic State terrorist Al-Sudani in Somalia - Hindustan Times",
  //           description:
  //             "Al-Sudani, who has been on the radar for U.S. intelligence officials for years, played a key role in helping to fund IS operations in Africa as well as the ISIS-K terrorist branch operating in Afghanistan. | World News",
  //           url: "https://www.hindustantimes.com/world-news/us-special-forces-kill-senior-islamic-state-official-al-sudani-in-somalia-101674777687232.html",
  //           urlToImage:
  //             "https://images.hindustantimes.com/img/2023/01/27/1600x900/SKOREA-US-MILITARY-3_1674777967144_1674777967144_1674777993394_1674777993394.jpg",
  //           publishedAt: "2023-01-27T00:21:13Z",
  //           content:
  //             "U.S. special operations forces have killed a senior Islamic State group official and 10 other terrorist operatives in remote northern Somalia, the Biden administration announced Thursday.\r\nThe operat… [+3164 chars]",
  //         },
  //         {
  //           source: { id: null, name: "The Indian Express" },
  //           author: "Shubhajit Roy",
  //           title:
  //             "China in play, Egypt reaches out to India for economy boost - The Indian Express",
  //           description:
  //             "Joint statement: Egypt welcomes flow of more investments, promises incentives & facilities; India underlines support",
  //           url: "https://indianexpress.com/article/india/china-in-play-egypt-reaches-out-to-india-for-economy-boost-8406857/",
  //           urlToImage:
  //             "https://images.indianexpress.com/2023/01/Modisisi-2col.jpg",
  //           publishedAt: "2023-01-26T22:40:07Z",
  //           content:
  //             "With Egypt battling a serious economic crisis, Egyptian President Abdel Fattah El-Sisi, who was the chief guest at the Republic Day parade Thursday, has reached out to India for investments and parti… [+5589 chars]",
  //         },
  //         {
  //           source: { id: null, name: "Livemint" },
  //           author: "Reuters",
  //           title:
  //             "Tata's Air India to seal half of jumbo plane order today | Mint - Mint",
  //           description:
  //             "Air India is expected to finalise a deal worth billions of dollars for some 495 jets with Boeing and engine suppliers General Electric and CFM International on Friday",
  //           url: "https://www.livemint.com/companies/news/tatas-air-india-to-seal-half-of-jumbo-plane-order-reports-11674770823661.html",
  //           urlToImage:
  //             "https://images.livemint.com/img/2023/01/26/600x338/Airindia_1674755645098_1674771057330_1674771057330.JPG",
  //           publishedAt: "2023-01-26T22:17:39Z",
  //           content:
  //             "Air India will on Friday seal half of an order worth billions of dollars for some 495 jets with Boeing and engine suppliers General Electric and CFM International, two industry sources said, as its n… [+3560 chars]",
  //         },
  //         {
  //           source: { id: null, name: "YouTube" },
  //           author: null,
  //           title:
  //             "Is NASA planning to test a nuclear-powered rocket engine? | WION Originals - WION",
  //           description:
  //             "NASA and the Defense Advanced Research Projects Agency (DARPA), a research arm of the US Department of Defense, have unveiled plans to test nuclear-powered r...",
  //           url: "https://www.youtube.com/watch?v=fs3NfA4XL0g",
  //           urlToImage: "https://i.ytimg.com/vi/fs3NfA4XL0g/maxresdefault.jpg",
  //           publishedAt: "2023-01-26T21:18:54Z",
  //           content: null,
  //         },
  //         {
  //           source: { id: null, name: "Livemint" },
  //           author: "WSJ",
  //           title:
  //             "Earth’s inner core may be reversing its rotation, study finds | Mint - Mint",
  //           description:
  //             "The change may shave the length of the day by a fraction of a millisecond over the course of a year",
  //           url: "https://www.livemint.com/science/news/earths-inner-core-may-be-reversing-its-rotation-study-finds-11674568987085.html",
  //           urlToImage:
  //             "https://images.livemint.com/img/2023/01/24/600x338/earth_1674569172364_1674569172517_1674569172517.jpg",
  //           publishedAt: "2023-01-26T19:20:08Z",
  //           content:
  //             "A team of researchers from China believe the Earths inner core has reversed its rotation after they analyzed earthquake-driven seismic waves as they pass through the Earth. In a study published Monda… [+2184 chars]",
  //         },
  //         {
  //           source: { id: null, name: "NDTV News" },
  //           author: null,
  //           title:
  //             "Amid Row, Congress Screens BBC Documentary On PM Modi In Kerala - NDTV",
  //           description:
  //             "Two-part BBC docu-series speaks, among other things, about the 2002 Gujarat riots; central government banned it in India saying it's false propaganda",
  //           url: "https://www.ndtv.com/india-news/amid-row-congress-in-kerala-to-screen-bbc-documentary-on-pm-modi-3726598",
  //           urlToImage:
  //             "https://c.ndtvimg.com/2023-01/qu2pskf8_bbc-kerala_625x300_26_January_23.jpg",
  //           publishedAt: "2023-01-26T18:21:38Z",
  //           content:
  //             "The Congress unit in Kerala screened the controversial BBC documentary\r\nThiruvananthapuram: The Congress unit in Kerala on Thursday screened the controversial BBC documentary on PM Narendra Modi in T… [+1747 chars]",
  //         },
  //       ];

    // program to convert first letter of a string to uppercase

    capitalizeFirstLetter(str) {
        // converting first letter to uppercase
        const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
        return capitalized;
    }

  constructor(props) {
    super(props);
    // console.log("constructor called");
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
    document.title=`${this.capitalizeFirstLetter(this.props.category)} -News article`;
  }

  //Creating a function that will reduce repetetive task;
  async updateNews(){
    const url =
        `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}&apiKey=5a5ab15878d846b58350687ed70f1841&page=${this.state.page}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parseData = await data.json();
    // console.log(parseData);
    this.setState({
        articles: parseData.articles,
        totalResults: parseData.totalResults,
        loading:false
    });
  }

  //It will run after the component output has been rendered to the DOM
  async componentDidMount() {
    // console.log("componentDidMount called");
    this.updateNews();
    //updating this with updateNews functionality
    // let url =
    // `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5a5ab15878d846b58350687ed70f1841&page=${this.state.page}pageSize=${this.props.pageSize}`;
    // this.setState({loading:true})
    // let data = await fetch(url);
    // let parseData = await data.json();
    // console.log(parseData);
    // this.setState({
    //   articles: parseData.articles,
    //   totalResults: parseData.totalResults,
    //   loading:false
    // });
  
}

  handlePrev = async () => {
    // console.log("handle prev button clicked");
    this.setState({page:this.state.page - 1});
    this.updateNews();

    //updating this with updateNews functionality
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5a5ab15878d846b58350687ed70f1841&page=${this.state.page}pageSize=${this.props.pageSize}`;
    // this.setState({loading:true})
    // let data = await fetch(url);
    // let parseData = await data.json();
    // console.log(parseData);
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parseData.articles,
    //   loading:false
    // });
  
};

  handleNext = async () => {
    // console.log("handle next button clicked");
    this.setState({page:this.state.page + 1});
    this.updateNews();

    //updating this with updateNews functionality
    // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 21))) {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5a5ab15878d846b58350687ed70f1841&page=${this.state.page}pageSize=${this.props.pageSize}`;
    //   this.setState({loading:true})
    //   let data = await fetch(url);
    //   let parseData = await data.json();
    //   console.log(parseData);
    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parseData.articles,
    //     loading:false
    //   });
    // }
  };
  render() {
    // console.log( "country: "+ this.props.country +",category: " + this.props.category+ " totalResults: " +this.state.totalResults)
    return (
      <div className="container my-3">
        <h1 className="text-center text-primary"> Top Headlines - {this.capitalizeFirstLetter(this.props.category)}</h1>
        {this.state.loading && <Spinner/>}
        {!this.state.loading && <div className="row my-3">
          {this.state.articles.map((elem) => {
            return (
              <div className="col-md-4" key={elem.url}>
                <NewsItem
                  title={elem.title.slice(0, 50)}
                  description={!elem.description  ? elem.description  : elem.description.slice(0, 150)}
                  imageUrl={elem.urlToImage}
                  newsUrl={elem.url}
                  author={!elem.author?"Unknown":elem.author}
                  publishedDate={elem.publishedAt}
                  source={elem.source.name}
                />
              </div>
            );
          })}
        </div>}
        <div className="container d-flex justify-content-between my-4">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-primary"
            type="button"
            onClick={this.handlePrev}
          >
            &larr;prev
          </button>
          <button
            disabled={this.state.page> Math.ceil(this.state.totalResults) / 21}
            className="btn btn-primary"
            type="button"
            onClick={this.handleNext}
          >
            {" "}
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
