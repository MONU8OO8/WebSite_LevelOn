import React, { useState } from 'react'
import OnboardingComponent from '../../components/onboarding/index'
import SeekerRoutes from '../../components/seekerroutes/index'
import ExpertRoutes from '../../components/expertroutes/index'

const RenderActiveComponent = () => {
    const [activeComponent, setActiveComponent] = useState('register')

    if (activeComponent === 'register') {
        return <OnboardingComponent setActiveComponent={setActiveComponent} />
    } else if (activeComponent === 'newComponent') {
        return <SeekerRoutes />
    } else if (activeComponent === 'anotherComponent'){
        return <ExpertRoutes />
    }

    return null
}

export default RenderActiveComponent
