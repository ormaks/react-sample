import React, {FC} from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import {CustomHeader} from '../styles/CustomHeader';
import MyImage from '../assets/images/example.png';
import '../styles/index.css'

const App: FC = () => {
    return (
        <div>
            {/*<CustomHeader>Hello World!</CustomHeader>*/}
            <ReactFullpage
                //fullpage options
                scrollingSpeed={1000}
                sectionsColor={["orange", "purple", "green", "blue"]}
                // menu={'#menu'}
                // anchors={['home', 'about', 'weOffer', 'realEstate', 'ourCases', 'reviews', 'faq', 'blogs']}
                // autoScrolling={tryAuto}
                // fitToSection={tryAuto}
                // scrollBar={true}
                // normalScrollElements={'section-3'}
                scrollOverflow={true}
                // navigation={false}
                // showActiveTooltip={!0}
                render={({state, fullpageApi}) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <div className="section section-1">
                                <CustomHeader>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
                                    asperiores assumenda atque aut autem beatae consequatur cumque cupiditate dolorum et
                                    explicabo fugiat harum iure magni mollitia nam, necessitatibus neque obcaecati
                                    officia omnis praesentium quasi quibusdam repudiandae, rerum sint veritatis
                                    vitae.</CustomHeader>
                                <p>Section 1</p>
                            </div>
                            <div className="section section-2">
                                <img src={MyImage} alt=""/>
                                {/*<img src={'https://picsum.photos/100/1000'} alt=""/>*/}
                                <p>Section 2</p>
                            </div>
                            <div className="section  section-3 fp-auto-height">
                                <CustomHeader>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto
                                    debitis dolor labore quae sit voluptatem. Assumenda deleniti, dolores ea ex,
                                    excepturi ipsum modi molestias, non odio provident saepe sunt temporibus! Adipisci
                                    commodi deserunt dolor et eveniet odio ut voluptas! Adipisci aut autem cupiditate
                                    illum ipsa, itaque laboriosam laudantium, minima molestiae molestias natus nemo
                                    nobis, odio porro possimus provident quae quasi sint soluta vel veritatis voluptatem
                                    voluptates? Accusantium asperiores at atque blanditiis, corporis cum cumque dolorum
                                    ducimus earum est excepturi exercitationem hic id impedit laudantium magni minima
                                    modi molestiae nemo nesciunt numquam obcaecati optio quae quis reiciendis rerum
                                    saepe suscipit tempore voluptas voluptate. A beatae blanditiis delectus deserunt
                                    ipsa, laborum maiores maxime molestiae sequi soluta vel, vitae voluptate! Facilis
                                    incidunt mollitia nesciunt similique velit? Ab consequuntur corporis dicta
                                    dignissimos, distinctio enim exercitationem facilis laudantium minima nobis
                                    obcaecati pariatur praesentium quae quas, recusandae repudiandae sint sunt ullam ut
                                    velit veniam vero voluptatem? Assumenda harum hic ipsam labore laudantium maiores
                                    non sed, sequi voluptatibus. Atque dolor dolore eaque, maiores quod sequi vitae
                                    voluptatum. Fugit impedit ipsum optio porro possimus quas quod reiciendis
                                    repellendus reprehenderit vero? Culpa cumque cupiditate distinctio impedit ipsum
                                    iusto minima modi non praesentium quasi qui, repellendus repudiandae veritatis
                                    vitae.</CustomHeader>
                                <CustomHeader>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto
                                    debitis dolor labore quae sit voluptatem. Assumenda deleniti, dolores ea ex,
                                    excepturi ipsum modi molestias, non odio provident saepe sunt temporibus! Adipisci
                                    commodi deserunt dolor et eveniet odio ut voluptas! Adipisci aut autem cupiditate
                                    illum ipsa, itaque laboriosam laudantium, minima molestiae molestias natus nemo
                                    nobis, odio porro possimus provident quae quasi sint soluta vel veritatis voluptatem
                                    voluptates? Accusantium asperiores at atque blanditiis, corporis cum cumque dolorum
                                    ducimus earum est excepturi exercitationem hic id impedit laudantium magni minima
                                    modi molestiae nemo nesciunt numquam obcaecati optio quae quis reiciendis rerum
                                    saepe suscipit tempore voluptas voluptate. A beatae blanditiis delectus deserunt
                                    ipsa, laborum maiores maxime molestiae sequi soluta vel, vitae voluptate! Facilis
                                    incidunt mollitia nesciunt similique velit? Ab consequuntur corporis dicta
                                    dignissimos, distinctio enim exercitationem facilis laudantium minima nobis
                                    obcaecati pariatur praesentium quae quas, recusandae repudiandae sint sunt ullam ut
                                    velit veniam vero voluptatem? Assumenda harum hic ipsam labore laudantium maiores
                                    non sed, sequi voluptatibus. Atque dolor dolore eaque, maiores quod sequi vitae
                                    voluptatum. Fugit impedit ipsum optio porro possimus quas quod reiciendis
                                    repellendus reprehenderit vero? Culpa cumque cupiditate distinctio impedit ipsum
                                    iusto minima modi non praesentium quasi qui, repellendus repudiandae veritatis
                                    vitae.</CustomHeader>
                                <p>Section 3</p>
                            </div>
                            <div className="section section-4 fp-auto-height">
                                <CustomHeader>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dicta
                                    eligendi eos facere facilis harum nisi quas tempore. Aliquam aut cum dolore fugit,
                                    hic illo inventore iste, necessitatibus obcaecati possimus qui saepe unde
                                    voluptatibus. Alias amet cumque deleniti dignissimos eum facilis ipsa iusto labore
                                    laborum, magnam modi natus nulla omnis optio pariatur, quam quis recusandae
                                    temporibus velit veniam? Ab amet architecto, commodi deserunt dolorem earum,
                                    excepturi facere illo ipsa minus molestias mollitia necessitatibus nemo odit omnis
                                    perferendis placeat porro possimus quam quis quisquam rerum saepe sapiente sed sequi
                                    sint sit tempora totam vel voluptas. Alias aliquid dolore fugit mollitia
                                    vero.!</CustomHeader>
                                <p>Section 4</p>
                            </div>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />

        </div>
    );
}

export default App;