import React from "react";
import { PageTitle } from '../../../_metronic/layout/core'
import { KTSVG, toAbsoluteUrl } from "../../../_metronic/helpers";
export function GroupAgentPage() {
    const users = [
        {
            avatar: '/media/avatars/150-1.jpg',
            name: 'Emma Smith',
            email: 'e.smith@kpmg.com.au',
            access: '1',
        },
        {
            state: 'danger',
            name: 'Melody Macy',
            email: 'melody@altbox.com',
            access: '1',
        },
        {
            avatar: '/media/avatars/150-2.jpg',
            name: 'Max Smith',
            email: 'max@kt.com',
            access: '3',
        },
        {
            avatar: '/media/avatars/150-2.jpg',
            name: 'Sean Bean',
            email: 'sean@dellito.com',
            access: '2',
        },
        {
            avatar: '/media/avatars/150-15.jpg',
            name: 'Brian Cox',
            email: 'brian@exchange.com',
            access: '3',
        },
        {
            state: 'warning',
            name: 'Mikaela Collins',
            email: 'mikaela@pexcom.com',
            access: '2',
        },
        {
            avatar: '/media/avatars/150-8.jpg',
            name: 'Francis Mitcham',
            email: 'f.mitcham@kpmg.com.au',
            access: '3',
        },
        {
            state: 'danger',
            name: 'Olivia Wild',
            email: 'olivia@corpmail.com',
            access: '2',
        },
        {
            state: 'info',
            name: 'Neil Owen',
            email: 'owen.neil@gmail.com',
            access: '1',
        },
        {
            avatar: '/media/avatars/150-6.jpg',
            name: 'Dan Wilson',
            email: 'dam@consilting.com',
            access: '3',
        },
        {
            state: 'danger',
            name: 'Emma Bold',
            email: 'emma@intenso.com',
            access: '2',
        },
        {
            avatar: '/media/avatars/150-7.jpg',
            name: 'Ana Crown',
            email: 'ana.cf@limtel.com',
            access: '1',
        },
        {
            state: 'primary',
            name: 'Robert Doe',
            email: 'robert@benko.com',
            access: '3',
        },
        {
            avatar: '/media/avatars/150-17.jpg',
            name: 'John Miller',
            email: 'miller@mapple.com',
            access: '3',
        },
        {
            state: 'success',
            name: 'Lucy Kunic',
            email: 'lucy.m@fentech.com',
            access: '2',
        },
        {
            avatar: '/media/avatars/150-10.jpg',
            name: 'Ethan Wilder',
            email: 'ethan@loop.com.au',
            access: '1',
        },
        {
            avatar: '/media/avatars/150-7.jpg',
            name: 'Ana Crown',
            email: 'ana.cf@limtel.com',
            access: '3',
        },
    ]
    return (
        <>
            <PageTitle breadcrumbs={[]}>Gestion des Groupes d'agents</PageTitle>

            <div className="row">
                <div className="col-xxl-4">
                    <div className="card h-xl-100">

                        <div className="card-header border-0 pt-5">
                            <h3 className='card-title align-items-start flex-column'>
                                <span className='card-label fw-bolder fs-3 mb-1'>Liste Groupes</span>
                                <span className='text-muted mt-1 fw-bold fs-7'>Total : 10</span>
                            </h3>

                            <div className="card-toolbar">
                                <a href="#" className="btn btn-sm btn-light">Voir Tous</a>
                            </div>

                        </div>

                        <div className="card-body pt-6">

                            <div className="d-flex flex-stack">

                                <div className="symbol symbol-40px me-4">
                                    <div className="symbol-label fs-2 fw-bold bg-danger text-inverse-danger">C</div>
                                </div>


                                <div className="d-flex align-items-center flex-row-fluid flex-wrap">

                                    <div className="flex-grow-1 me-2">
                                        <a href="/metronic8/demo6/../demo6/pages/user-profile/overview.html" className="text-gray-800 text-hover-primary fs-6 fw-bolder">Coordination</a>
                                        
                                    </div>

                                    <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">

                                        <span className="svg-icon svg-icon-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor"></rect>
                                                <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor"></path>
                                            </svg>
                                        </span>

                                    </a>

                                </div>

                            </div>

                            <div className="separator separator-dashed my-4"></div>


                            <div className="d-flex flex-stack">

                                <div className="symbol symbol-40px me-4">
                                    <div className="symbol-label fs-2 fw-bold bg-success text-inverse-danger">EM</div>
                                </div>


                                <div className="d-flex align-items-center flex-row-fluid flex-wrap">

                                    <div className="flex-grow-1 me-2">
                                        <a href="/metronic8/demo6/../demo6/pages/user-profile/overview.html" className="text-gray-800 text-hover-primary fs-6 fw-bolder">Etat Major</a>
                                        
                                    </div>

                                    <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">

                                        <span className="svg-icon svg-icon-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor"></rect>
                                                <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor"></path>
                                            </svg>
                                        </span>

                                    </a>

                                </div>

                            </div>

                            <div className="separator separator-dashed my-4"></div>

                            <div className="d-flex flex-stack">

                                <div className="symbol symbol-40px me-4">
                                    <div className="symbol-label fs-2 fw-bold bg-info text-inverse-danger">W</div>
                                </div>

                                <div className="d-flex align-items-center flex-row-fluid flex-wrap">

                                    <div className="flex-grow-1 me-2">
                                        <a href="/metronic8/demo6/../demo6/pages/user-profile/overview.html" className="text-gray-800 text-hover-primary fs-6 fw-bolder">Web Development</a>
                                        <span className="text-muted fw-bold d-block fs-7">120+ Courses</span>
                                    </div>

                                    <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">

                                        <span className="svg-icon svg-icon-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor"></rect>
                                                <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor"></path>
                                            </svg>
                                        </span>

                                    </a>

                                </div>

                            </div>

                            <div className="separator separator-dashed my-4"></div>

                            <div className="d-flex flex-stack">

                                <div className="symbol symbol-40px me-4">
                                    <div className="symbol-label fs-2 fw-bold bg-primary text-inverse-danger">M</div>
                                </div>

                                <div className="d-flex align-items-center flex-row-fluid flex-wrap">

                                    <div className="flex-grow-1 me-2">
                                        <a href="/metronic8/demo6/../demo6/pages/user-profile/overview.html" className="text-gray-800 text-hover-primary fs-6 fw-bolder">Marketing</a>
                                        <span className="text-muted fw-bold d-block fs-7">50+ Courses.</span>
                                    </div>

                                    <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">

                                        <span className="svg-icon svg-icon-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor"></rect>
                                                <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor"></path>
                                            </svg>
                                        </span>

                                    </a>

                                </div>

                            </div>

                            <div className="separator separator-dashed my-4"></div>

                            <div className="d-flex flex-stack">

                                <div className="symbol symbol-40px me-4">
                                    <div className="symbol-label fs-2 fw-bold bg-warning text-inverse-danger">P</div>
                                </div>

                                <div className="d-flex align-items-center flex-row-fluid flex-wrap">

                                    <div className="flex-grow-1 me-2">
                                        <a href="/metronic8/demo6/../demo6/pages/user-profile/overview.html" className="text-gray-800 text-hover-primary fs-6 fw-bolder">Philosophy</a>
                                        <span className="text-muted fw-bold d-block fs-7">24+ Courses</span>
                                    </div>

                                    <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">

                                        <span className="svg-icon svg-icon-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor"></rect>
                                                <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor"></path>
                                            </svg>
                                        </span>

                                    </a>

                                </div>

                            </div>

                            <div className="separator separator-dashed my-4"></div>

                            <div className="d-flex flex-stack">

                                <div className="symbol symbol-40px me-4">
                                    <div className="symbol-label fs-2 fw-bold bg-dark text-inverse-danger">M</div>
                                </div>

                                <div className="d-flex align-items-center flex-row-fluid flex-wrap">

                                    <div className="flex-grow-1 me-2">
                                        <a href="/metronic8/demo6/../demo6/pages/user-profile/overview.html" className="text-gray-800 text-hover-primary fs-6 fw-bolder">Mathematics</a>
                                        <span className="text-muted fw-bold d-block fs-7">24+ Courses</span>
                                    </div>


                                    <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">

                                        <span className="svg-icon svg-icon-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor"></rect>
                                                <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor"></path>
                                            </svg>
                                        </span>

                                    </a>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>
                <div className="col-xl-8">
                    <div className={`card `}>
                        {/* begin::Header */}
                        <div className='card-header border-0 pt-5'>
                            <h3 className='card-title align-items-start flex-column'>
                                <span className='card-label fw-bolder fs-3 mb-1'>Tous les agents</span>
                                <span className='text-muted mt-1 fw-bold fs-7'>Total : 10 </span>
                            </h3>
                            <div
                                className='card-toolbar'
                                data-bs-toggle='tooltip'
                                data-bs-placement='top'
                                data-bs-trigger='hover'
                                title='Click to add a user'
                            >
                                <a
                                    href='#'
                                    className='btn btn-sm btn-light-primary'
                                    data-bs-toggle='modal'
                                    data-bs-target='#kt_modal_invite_friends'
                                >
                                    <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-3' />
                                    Nouvel Agent
                                </a>
                            </div>
                        </div>
                        {/* end::Header */}
                        {/* begin::Body */}
                        <div className='card-body py-3'>
                            {/* begin::Table container */}
                            <div className='table-responsive'>
                                {/* begin::Table */}
                                <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
                                    {/* begin::Table head */}
                                    <thead>
                                        <tr className='fw-bolder text-muted'>
                                            <th className='w-25px'>
                                                <div className='form-check form-check-sm form-check-custom form-check-solid'>
                                                    <input
                                                        className='form-check-input'
                                                        type='checkbox'
                                                        value='1'
                                                        data-kt-check='true'
                                                        data-kt-check-target='.widget-9-check'
                                                    />
                                                </div>
                                            </th>
                                            <th className='min-w-200px'>Noms & prénoms</th>
                                            <th className='min-w-130px'>Contacts</th>
                                            <th className='min-w-50px'>Date ajout</th>
                                            <th className='min-w-100px text-end'>Actions</th>
                                        </tr>
                                    </thead>
                                    {/* end::Table head */}
                                    {/* begin::Table body */}
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className='form-check form-check-sm form-check-custom form-check-solid'>
                                                    <input className='form-check-input widget-9-check' type='checkbox' value='1' />
                                                </div>
                                            </td>
                                            <td>
                                                <div className='d-flex align-items-center'>
                                                    <div className='symbol symbol-45px me-5'>
                                                        <img src={toAbsoluteUrl('/media/avatars/blank.png')} alt='' />
                                                    </div>
                                                    <div className='d-flex justify-content-start flex-column'>
                                                        <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                                                            Yardima D. Hamed
                                                        </a>
                                                        <span className='text-muted fw-bold text-muted d-block fs-7'>
                                                            CS reseau
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                                                    +225 0708090701
                                                </a>
                                                <span className='text-muted fw-bold text-muted d-block fs-7'>
                                                    dyardima@gs2e.ci
                                                </span>
                                            </td>
                                            <td className=''>
                                                <span className='text-muted fw-bold text-muted d-block fs-7'>
                                                    Il ya 3 mois
                                                </span>
                                            </td>
                                            <td>
                                                <div className='d-flex justify-content-end flex-shrink-0'>
                                                    <a
                                                        href='#'
                                                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                                    >
                                                        <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                                                    </a>
                                                    <a
                                                        href='#'
                                                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                                                    >
                                                        <KTSVG
                                                            path='/media/icons/duotune/general/gen027.svg'
                                                            className='svg-icon-3'
                                                        />
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='form-check form-check-sm form-check-custom form-check-solid'>
                                                    <input className='form-check-input widget-9-check' type='checkbox' value='1' />
                                                </div>
                                            </td>
                                            <td>
                                                <div className='d-flex align-items-center'>
                                                    <div className='symbol symbol-45px me-5'>
                                                        <img src={toAbsoluteUrl('/media/avatars/blank.png')} alt='' />
                                                    </div>
                                                    <div className='d-flex justify-content-start flex-column'>
                                                        <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                                                            Yardima D. Hamed
                                                        </a>
                                                        <span className='text-muted fw-bold text-muted d-block fs-7'>
                                                            CS reseau
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                                                    +225 0708090701
                                                </a>
                                                <span className='text-muted fw-bold text-muted d-block fs-7'>
                                                    dyardima@gs2e.ci
                                                </span>
                                            </td>
                                            <td className=''>
                                                <span className='text-muted fw-bold text-muted d-block fs-7'>
                                                    Il ya 3 mois
                                                </span>
                                            </td>
                                            <td>
                                                <div className='d-flex justify-content-end flex-shrink-0'>
                                                    <a
                                                        href='#'
                                                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                                    >
                                                        <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                                                    </a>
                                                    <a
                                                        href='#'
                                                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                                                    >
                                                        <KTSVG
                                                            path='/media/icons/duotune/general/gen027.svg'
                                                            className='svg-icon-3'
                                                        />
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='form-check form-check-sm form-check-custom form-check-solid'>
                                                    <input className='form-check-input widget-9-check' type='checkbox' value='1' />
                                                </div>
                                            </td>
                                            <td>
                                                <div className='d-flex align-items-center'>
                                                    <div className='symbol symbol-45px me-5'>
                                                        <img src={toAbsoluteUrl('/media/avatars/blank.png')} alt='' />
                                                    </div>
                                                    <div className='d-flex justify-content-start flex-column'>
                                                        <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                                                            Yardima D. Hamed
                                                        </a>
                                                        <span className='text-muted fw-bold text-muted d-block fs-7'>
                                                            CS reseau
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                                                    +225 0708090701
                                                </a>
                                                <span className='text-muted fw-bold text-muted d-block fs-7'>
                                                    dyardima@gs2e.ci
                                                </span>
                                            </td>
                                            <td className=''>
                                                <span className='text-muted fw-bold text-muted d-block fs-7'>
                                                    Il ya 3 mois
                                                </span>
                                            </td>
                                            <td>
                                                <div className='d-flex justify-content-end flex-shrink-0'>
                                                    <a
                                                        href='#'
                                                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                                    >
                                                        <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                                                    </a>
                                                    <a
                                                        href='#'
                                                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                                                    >
                                                        <KTSVG
                                                            path='/media/icons/duotune/general/gen027.svg'
                                                            className='svg-icon-3'
                                                        />
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='form-check form-check-sm form-check-custom form-check-solid'>
                                                    <input className='form-check-input widget-9-check' type='checkbox' value='1' />
                                                </div>
                                            </td>
                                            <td>
                                                <div className='d-flex align-items-center'>
                                                    <div className='symbol symbol-45px me-5'>
                                                        <img src={toAbsoluteUrl('/media/avatars/blank.png')} alt='' />
                                                    </div>
                                                    <div className='d-flex justify-content-start flex-column'>
                                                        <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                                                            Yardima D. Hamed
                                                        </a>
                                                        <span className='text-muted fw-bold text-muted d-block fs-7'>
                                                            CS reseau
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                                                    +225 0708090701
                                                </a>
                                                <span className='text-muted fw-bold text-muted d-block fs-7'>
                                                    dyardima@gs2e.ci
                                                </span>
                                            </td>
                                            <td className=''>
                                                <span className='text-muted fw-bold text-muted d-block fs-7'>
                                                    Il ya 3 mois
                                                </span>
                                            </td>
                                            <td>
                                                <div className='d-flex justify-content-end flex-shrink-0'>
                                                    <a
                                                        href='#'
                                                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                                    >
                                                        <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                                                    </a>
                                                    <a
                                                        href='#'
                                                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                                                    >
                                                        <KTSVG
                                                            path='/media/icons/duotune/general/gen027.svg'
                                                            className='svg-icon-3'
                                                        />
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='form-check form-check-sm form-check-custom form-check-solid'>
                                                    <input className='form-check-input widget-9-check' type='checkbox' value='1' />
                                                </div>
                                            </td>
                                            <td>
                                                <div className='d-flex align-items-center'>
                                                    <div className='symbol symbol-45px me-5'>
                                                        <img src={toAbsoluteUrl('/media/avatars/blank.png')} alt='' />
                                                    </div>
                                                    <div className='d-flex justify-content-start flex-column'>
                                                        <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                                                            Yardima D. Hamed
                                                        </a>
                                                        <span className='text-muted fw-bold text-muted d-block fs-7'>
                                                            CS reseau
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                                                    +225 0708090701
                                                </a>
                                                <span className='text-muted fw-bold text-muted d-block fs-7'>
                                                    dyardima@gs2e.ci
                                                </span>
                                            </td>
                                            <td className=''>
                                                <span className='text-muted fw-bold text-muted d-block fs-7'>
                                                    Il ya 3 mois
                                                </span>
                                            </td>
                                            <td>
                                                <div className='d-flex justify-content-end flex-shrink-0'>
                                                    <a
                                                        href='#'
                                                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                                    >
                                                        <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                                                    </a>
                                                    <a
                                                        href='#'
                                                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                                                    >
                                                        <KTSVG
                                                            path='/media/icons/duotune/general/gen027.svg'
                                                            className='svg-icon-3'
                                                        />
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='form-check form-check-sm form-check-custom form-check-solid'>
                                                    <input className='form-check-input widget-9-check' type='checkbox' value='1' />
                                                </div>
                                            </td>
                                            <td>
                                                <div className='d-flex align-items-center'>
                                                    <div className='symbol symbol-45px me-5'>
                                                        <img src={toAbsoluteUrl('/media/avatars/blank.png')} alt='' />
                                                    </div>
                                                    <div className='d-flex justify-content-start flex-column'>
                                                        <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                                                            Yardima D. Hamed
                                                        </a>
                                                        <span className='text-muted fw-bold text-muted d-block fs-7'>
                                                            CS reseau
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                                                    +225 0708090701
                                                </a>
                                                <span className='text-muted fw-bold text-muted d-block fs-7'>
                                                    dyardima@gs2e.ci
                                                </span>
                                            </td>
                                            <td className=''>
                                                <span className='text-muted fw-bold text-muted d-block fs-7'>
                                                    Il ya 3 mois
                                                </span>
                                            </td>
                                            <td>
                                                <div className='d-flex justify-content-end flex-shrink-0'>
                                                    <a
                                                        href='#'
                                                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                                    >
                                                        <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                                                    </a>
                                                    <a
                                                        href='#'
                                                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                                                    >
                                                        <KTSVG
                                                            path='/media/icons/duotune/general/gen027.svg'
                                                            className='svg-icon-3'
                                                        />
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                    {/* end::Table body */}
                                </table>
                                {/* end::Table */}
                            </div>
                            {/* end::Table container */}
                        </div>
                        {/* begin::Body */}
                    </div>
                </div>
            </div>
            <div className='modal fade' id='kt_modal_invite_friends' aria-hidden='true'>
                <div className='modal-dialog mw-650px'>
                    <div className='modal-content'>
                        <div className='modal-header pb-0 border-0 justify-content-end'>
                            <div className='btn btn-sm btn-icon btn-active-color-primary' data-bs-dismiss='modal'>
                                <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-1' />
                            </div>
                        </div>

                        <div className='modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15'>
                            <div className='text-center mb-13'>
                                <h1 className='mb-3'>Ajouter un agent au groupe</h1>
                            </div>

                            <div className="fv-row mb-10">
                                <label className="form-label required">Type de Supervision</label>
                                <select name="businessType" className="form-select form-select-lg form-select-solid">
                                    <option>Selectionnez une supervision</option>
                                    <option value="1">Coordiantion</option>
                                    <option value="2">Etat Major</option>
                                    <option value="3">Infrastructure serveurs</option>
                                    <option value="4">Support aux utilisateurs </option>

                                </select>
                                <div className="text-danger mt-2"></div></div>

                            <div className='separator d-flex flex-center mb-8'>
                                <span className='text-uppercase bg-body fs-7 fw-bold text-muted px-3'></span>
                            </div>

                            <div className='mb-10'>
                                <div className='fs-6 fw-bold mb-2'>Liste collaborateurs</div>

                                <div className='mh-300px scroll-y me-n7 pe-7'>
                                    {users.map((user, i) => {
                                        return (
                                            <div
                                                className='d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed'
                                                key={i}
                                            >
                                                <div className='d-flex align-items-center'>
                                                    <div className='symbol symbol-35px symbol-circle'>
                                                        {user.avatar && <img alt='Pic' src={toAbsoluteUrl(user.avatar)} />}
                                                        {user.state && (
                                                            <div className='symbol symbol-35px symbol-circle'>
                                                                <span
                                                                    className={`symbol-label bg-light-${user.state} text-${user.state} fw-bold`}
                                                                >
                                                                    {user.name.charAt(0)}
                                                                </span>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className='ms-5'>
                                                        <a
                                                            href='#'
                                                            className='fs-5 fw-bolder text-gray-900 text-hover-primary mb-2'
                                                        >
                                                            {user.name}
                                                        </a>
                                                        <div className='fw-bold text-muted'>{user.email}</div>
                                                    </div>
                                                </div>

                                                <div className='ms-2 w-100px'>
                                                    <div className='form-check form-check-sm form-check-custom form-check-solid'>
                                                        <input
                                                            className='form-check-input'
                                                            type='checkbox'
                                                            value='1'
                                                            data-kt-check='true'
                                                            data-kt-check-target='.widget-9-check'
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className='d-flex flex-stack'>
                                <div className='me-5 fw-bold'>
                                    <button type="submit" id="btn-submit" className="btn btn-lg btn-primary w-100 mb-5">
                                        <span className="indicator-label">Enregistrer</span>
                                        <span className="indicator-progress">Please wait...
                                            <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                    </button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )


}