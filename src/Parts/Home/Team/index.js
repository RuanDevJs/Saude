import React from "react";
import {
    Teams,
    Wrap,
    Title,
    Subtitle,
    Image,
    TeamContent,
    Name,
    Description,
    Profession,
} from "./style";

import RuanIcon from "../../../assets/img/teams/img-Ruan.svg";
import Cleiton from "../../../assets/img/teams/img_cleiton.svg";
import Ace from "../../../assets/img/teams/Ace.svg";
import Guts from "../../../assets/img/teams/Guts.svg";
import Rodrigo from "../../../assets/img/teams/Rodrigo.svg";

export default function Team() {
    return (
        <Teams>
            <Title className="fw-900 c-purple">Nosso time</Title>
            <Subtitle className="fw-300 c-grey">
                Conheça Um Pouco Do Time
            </Subtitle>
            <Wrap>
                <Image src={RuanIcon} />
                <TeamContent>
                    <Name className="fw-900 c-purple">Ruan Vitor</Name>
                    <Profession className="fw-900 c-blue">Desenvolvedor</Profession>
                    <Description className="fw-400 c-grey">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ratione dolores architecto voluptate atque aut
                        aspernatur at odit nemo fuga. Alias harum veniam,
                        nesciunt nulla maxime repudiandae odit, doloremque
                        voluptatibus, laudantium omnis expedita adipisci. Rerum
                        odio magnam, ut asperiores maxime sequi fuga tenetur at
                        est totam labore? Expedita, sequi! Nobis, non repellat
                        fugiat eligendi error suscipit qui, cumque ea et
                        voluptate repellendus quo unde ipsam quas doloremque
                        magnam alias id rerum veniam. Ex eligendi quod delectus
                        nostrum dolorum recusandae illo mollitia vitae, ad
                        nihil. Laudantium corporis porro id soluta error in!
                    </Description>
                </TeamContent>
            </Wrap>
            <Wrap isReverse>
                <Image src={Cleiton} isReverse/>
                <TeamContent>
                    <Name className="fw-900 c-purple">Guilherme</Name>
                    <Profession className="fw-900 c-blue">Desenvolvedor</Profession>
                    <Description className="fw-400 c-grey">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ratione dolores architecto voluptate atque aut
                        aspernatur at odit nemo fuga. Alias harum veniam,
                        nesciunt nulla maxime repudiandae odit, doloremque
                        voluptatibus, laudantium omnis expedita adipisci. Rerum
                        odio magnam, ut asperiores maxime sequi fuga tenetur at
                        est totam labore? Expedita, sequi! Nobis, non repellat
                        fugiat eligendi error suscipit qui, cumque ea et
                        voluptate repellendus quo unde ipsam quas doloremque
                        magnam alias id rerum veniam. Ex eligendi quod delectus
                        nostrum dolorum recusandae illo mollitia vitae, ad
                        nihil. Laudantium corporis porro id soluta error in!
                    </Description>
                </TeamContent>
            </Wrap>
            <Wrap>
                <Image src={Ace} />
                <TeamContent>
                    <Name className="fw-900 c-purple">Thiago</Name>
                    <Profession className="fw-900 c-blue">CEO</Profession>
                    <Description className="fw-400 c-grey">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ratione dolores architecto voluptate atque aut
                        aspernatur at odit nemo fuga. Alias harum veniam,
                        nesciunt nulla maxime repudiandae odit, doloremque
                        voluptatibus, laudantium omnis expedita adipisci. Rerum
                        odio magnam, ut asperiores maxime sequi fuga tenetur at
                        est totam labore? Expedita, sequi! Nobis, non repellat
                        fugiat eligendi error suscipit qui, cumque ea et
                        voluptate repellendus quo unde ipsam quas doloremque
                        magnam alias id rerum veniam. Ex eligendi quod delectus
                        nostrum dolorum recusandae illo mollitia vitae, ad
                        nihil. Laudantium corporis porro id soluta error in!
                    </Description>
                </TeamContent>
            </Wrap>
            <Wrap isReverse>
                <Image src={Guts} isReverse/>
                <TeamContent>
                    <Name className="fw-900 c-purple">Lucas</Name>
                    <Profession className="fw-900 c-blue">CEO</Profession>
                    <Description className="fw-400 c-grey">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ratione dolores architecto voluptate atque aut
                        aspernatur at odit nemo fuga. Alias harum veniam,
                        nesciunt nulla maxime repudiandae odit, doloremque
                        voluptatibus, laudantium omnis expedita adipisci. Rerum
                        odio magnam, ut asperiores maxime sequi fuga tenetur at
                        est totam labore? Expedita, sequi! Nobis, non repellat
                        fugiat eligendi error suscipit qui, cumque ea et
                        voluptate repellendus quo unde ipsam quas doloremque
                        magnam alias id rerum veniam. Ex eligendi quod delectus
                        nostrum dolorum recusandae illo mollitia vitae, ad
                        nihil. Laudantium corporis porro id soluta error in!
                    </Description>
                </TeamContent>
            </Wrap>
            <Wrap>
                <Image src={Rodrigo} />
                <TeamContent>
                    <Name className="fw-900 c-purple">Rodrigo</Name>
                    <Profession className="fw-900 c-blue">Designer</Profession>
                    <Description className="fw-400 c-grey">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ratione dolores architecto voluptate atque aut
                        aspernatur at odit nemo fuga. Alias harum veniam,
                        nesciunt nulla maxime repudiandae odit, doloremque
                        voluptatibus, laudantium omnis expedita adipisci. Rerum
                        odio magnam, ut asperiores maxime sequi fuga tenetur at
                        est totam labore? Expedita, sequi! Nobis, non repellat
                        fugiat eligendi error suscipit qui, cumque ea et
                        voluptate repellendus quo unde ipsam quas doloremque
                        magnam alias id rerum veniam. Ex eligendi quod delectus
                        nostrum dolorum recusandae illo mollitia vitae, ad
                        nihil. Laudantium corporis porro id soluta error in!
                    </Description>
                </TeamContent>
            </Wrap>
        </Teams>
    );
}
