import { BoxHomeContainer } from './styHome'
import { HomePageHome } from './styHome'
import { HomeCriativo } from './styHome'
import { CriativoInfos } from './styHome'
import imgProjeto from './projeto.png'
import { HomeCommunity } from './styHome'
import imgComputer from './computer.png'
import { DivCommunity } from './styHome'
import { HomeMembros } from './styHome'
import { DivMembros } from './styHome'
import { DivMembrosInfos } from './styHome'
//Import Css

import './fadeIn.css'
import { useEffect, useState } from 'react'
import { IoHeartCircleSharp } from 'react-icons/io5'
import { BsStar } from 'react-icons/bs'

const Home = () => {
    const [styles, setStyles] = useState({
        fade: 'fade-out',
        faden: 'fade-out-out',
    })

    useEffect(() => {
        const timeOut = setTimeout(() => {
            if (styles.fade === 'fade-out' && styles.faden === 'fade-out-out') {
                setStyles({
                    fade: 'fade-in',
                    faden: 'fade-in-in',
                })
            }

            return clearTimeout(timeOut)
        }, 1000)
    }, [[styles]])

    return (
        <BoxHomeContainer>
            <HomePageHome>
                <div className="profile_info_img">
                    <div className={styles.faden}>
                        <img
                            src="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_580,h_430/https://ibdcinstituto.com.br/wp-content/uploads/2020/09/homem-modelo-.png"
                            alt="Foto_perfil_page"
                        />
                    </div>
                </div>

                <div className="profile_info_title">
                    <div>
                        <h1 className={styles.fade}>
                            build a dream beyond your limit
                        </h1>
                    </div>
                </div>
            </HomePageHome>

            <HomeCriativo divContents="">
                <h1 className="title-criativo">Momento Criativo</h1>

                <CriativoInfos data-aos="fade-up" data-aos-duration="1500">
                    <div className="titles-criativo">
                        <div className="hs-criativo">
                            <h1>Seja o seu melhor</h1>
                            <h2>Construa Um projeto</h2>
                        </div>
                        <div className="p-criativo">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Repellat earum a fugiat nisi
                                nam ipsam cumque sed cupiditate corrupti
                                obcaecati placeat voluptas odit, minus amet quo,
                                beatae unde numquam eaque.
                            </p>
                        </div>
                    </div>

                    <div className="img-criativo">
                        <img src={imgProjeto} alt="" />
                    </div>
                </CriativoInfos>

                <HomeCommunity data-aos="fade-up" data-aos-duration="1500">
                    <DivCommunity>
                        <div
                            data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-sine"
                            className="community-img"
                        >
                            <img src={imgComputer} alt="" />
                        </div>

                        <div
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="300"
                            data-aos-duration="1000"
                            data-aos-offset="0"
                            className="titles-community"
                        >
                            <div className="hs-community">
                                <h1> Faça parte da Community</h1>
                                <h2>Interaja com membros</h2>
                            </div>
                            <div className="p-community">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Mollitia non explicabo in
                                    quos rem molestiae nostrum. Quaerat
                                    excepturi quae, deserunt maiores provident
                                    incidunt unde impedit ea, beatae tenetur!
                                </p>
                            </div>
                        </div>
                    </DivCommunity>
                </HomeCommunity>

                <HomeMembros>
                    <DivMembros data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" >
                        <h1 >Membros Stars</h1>
                        <DivMembrosInfos data-aos="fade-right"               data-aos-easing="ease-in-sine" >
                            <div className="membros-profiles">
                                <div className="img-profile-capa">
                                    <img
                                        src="https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?size=626&ext=jpg"
                                        alt=""
                                    />
                                    <div className="img-profile-perfil">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo42W0iCr-b44azBj0zn8mM6OQcJQ_cp_-dVPwrsY12biAEYJn3D9Ql9qAYgvbP_RnPE8&usqp=CAU"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="titles-profile">
                                    <h2>Mary Helena</h2>

                                    <span>
                                        <IoHeartCircleSharp />
                                    </span>

                                    <div className="titles-dsc">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Id officia architecto
                                        aperiam minus dignissimos adipisci,
                                        voluptatem perspiciatis
                                    </div>
                                    <div className="profile-stars">
                                        <BsStar />
                                        <BsStar />
                                        <BsStar />
                                        <BsStar />
                                        <BsStar />
                                    </div>
                                </div>
                            </div>

                            <div className="membros-profiles">
                                <div className="img-profile-capa">
                                    <img
                                        src="https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?size=626&ext=jpg"
                                        alt=""
                                    />
                                    <div className="img-profile-perfil">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo42W0iCr-b44azBj0zn8mM6OQcJQ_cp_-dVPwrsY12biAEYJn3D9Ql9qAYgvbP_RnPE8&usqp=CAU"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="titles-profile">
                                    <h2>Mary Helena</h2>

                                    <span>
                                        <IoHeartCircleSharp />
                                    </span>

                                    <div className="titles-dsc">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Id officia architecto
                                        aperiam minus dignissimos adipisci,
                                        voluptatem perspiciatis
                                    </div>
                                    <div className="profile-stars">
                                        <BsStar   />
                                        <BsStar />
                                        <BsStar />
                                        <BsStar />
                                        <BsStar />
                                    </div>
                                </div>
                            </div>

                            <div className="membros-profiles">
                                <div className="img-profile-capa">
                                    <img
                                        src="https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?size=626&ext=jpg"
                                        alt=""
                                    />
                                    <div className="img-profile-perfil">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo42W0iCr-b44azBj0zn8mM6OQcJQ_cp_-dVPwrsY12biAEYJn3D9Ql9qAYgvbP_RnPE8&usqp=CAU"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="titles-profile">
                                    <h2>Mary Helena</h2>

                                    <span>
                                        <IoHeartCircleSharp />
                                    </span>

                                    <div className="titles-dsc">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Id officia architecto
                                        aperiam minus dignissimos adipisci,
                                        voluptatem perspiciatis
                                    </div>
                                    <div className="profile-stars">
                                        <BsStar />
                                        <BsStar />
                                        <BsStar />
                                        <BsStar />
                                        <BsStar />
                                    </div>
                                </div>
                            </div>
                        </DivMembrosInfos>
                    </DivMembros>
                </HomeMembros>
            </HomeCriativo>
        </BoxHomeContainer>
    )
}

export default Home
