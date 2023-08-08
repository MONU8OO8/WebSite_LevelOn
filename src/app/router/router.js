import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { RouteConstant } from '../constants/app-constants'
import Signup from '../pages/signup'
import Home from '../pages/home'
import SearchAppBar from '../containers/navbar'
import SeekerProfileWrapper from '../pages/seekerProfile'

const Login = lazy(() => import('../pages/login'))
const Profile = lazy(() => import('../pages/profile'))
const Redux = lazy(() => import('../pages/redux'))
const Onboarding = lazy(() => import('../pages/onboard/index'))
const ForgotPass = lazy(() => import('../pages/forgotpassword'))

const Router = () => {
    return (
        <Routes>
            <Route exact path={RouteConstant['HOME']} element={<Suspense fallback="loading..."><Home /></Suspense>} />
            <Route exact path={RouteConstant['LOGIN']} element={<Suspense fallback="loading..."><Login /></Suspense>} />
            <Route exact path={RouteConstant['SIGNUP']} element={<Suspense fallback="loading..."><Signup /></Suspense>} />
            <Route exact path={RouteConstant['PROFILEPAGE']} element={<Suspense fallback="loading..."><Profile /></Suspense>} />
            <Route exact path={RouteConstant['REDUX']} element={<Suspense fallback="loading..."><Redux /></Suspense>} />
            <Route exact path={RouteConstant['ONBOARDING']} element={<Suspense fallback="loading..."><Onboarding /></Suspense>} />
            <Route exact path={RouteConstant['fORGOTPASSWORD']} element={<Suspense fallback="loading..."> <ForgotPass /> </Suspense>} />
            <Route exact path={RouteConstant['NAVIGATION']} element={<Suspense fallback="loading..."> <SearchAppBar /> </Suspense>} />
            <Route exact path={RouteConstant['SEEKERPROFILE']} element={<Suspense fallback="loading..."> <SeekerProfileWrapper /> </Suspense>} />



        </Routes>
    )
}

export default Router