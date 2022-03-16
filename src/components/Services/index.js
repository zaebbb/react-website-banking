import Icon1 from './../../images/svg-1.svg'
import Icon2 from './../../images/svg-6.svg'
import Icon3 from './../../images/svg-3.svg'
import Icon4 from './../../images/svg-2.svg'
import Icon5 from './../../images/svg-4.svg'
import Icon6 from './../../images/svg-5.svg'

import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './Services'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>
            Our Services
            </ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon 
                    src={Icon1} />
                    <ServicesH2>
                    Reduce expenses
                    </ServicesH2>
                    <ServicesP>
                    Мы помогаем снизить ваши комиссионные и увеличить ваш общий доход.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon 
                    src={Icon2} />
                    <ServicesH2>
                    Premium Benefits
                    </ServicesH2>
                    <ServicesP>
                    Мы помогаем снизить ваши комиссионные и увеличить ваш общий доход.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon 
                    src={Icon3} />
                    <ServicesH2>
                    Virtual Offices
                    </ServicesH2>
                    <ServicesP>
                    Мы помогаем снизить ваши комиссионные и увеличить ваш общий доход.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon 
                    src={Icon4} />
                    <ServicesH2>
                    Reduce expenses
                    </ServicesH2>
                    <ServicesP>
                    Мы помогаем снизить ваши комиссионные и увеличить ваш общий доход.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon 
                    src={Icon5} />
                    <ServicesH2>
                    Premium Benefits
                    </ServicesH2>
                    <ServicesP>
                    Мы помогаем снизить ваши комиссионные и увеличить ваш общий доход.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon 
                    src={Icon6} />
                    <ServicesH2>
                    Virtual Offices
                    </ServicesH2>
                    <ServicesP>
                    Мы помогаем снизить ваши комиссионные и увеличить ваш общий доход.
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
