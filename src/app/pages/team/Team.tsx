import React from "react";
import { PageTitle } from '../../../_metronic/layout/core'
import { KTSVG, toAbsoluteUrl } from "../../../_metronic/helpers";


export function TeamPage() {
    return (
        <>
            <PageTitle breadcrumbs={[]}>Sociétés</PageTitle>
            <div className="d-flex flex-wrap flex-stack pb-7">
                <div className="d-flex flex-wrap align-items-center my-1">
                    <h3 className="fw-bolder me-5 my-1">Equipes Normales (3)</h3>

                    <div className="d-flex align-items-center position-relative my-1">

                        <span className="svg-icon svg-icon-3 position-absolute ms-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor"></rect>
                                <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor"></path>
                            </svg>
                        </span>

                        <input type="text" id="kt_filter_search" className="form-control form-control-sm border-body bg-body w-150px ps-10" placeholder="Search" />
                    </div>

                </div>

                <div className="d-flex flex-wrap my-1" data-select2-id="select2-data-129-43ke">

                    <ul className="nav nav-pills me-6 mb-2 mb-sm-0">
                        <li className="nav-item m-0">
                            <a className="btn btn-sm btn-icon btn-light btn-color-muted btn-active-primary me-3 active" data-bs-toggle="tab" href="#kt_project_users_card_pane">

                                <span className="svg-icon svg-icon-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor"></rect>
                                            <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
                                            <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
                                            <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3"></rect>
                                        </g>
                                    </svg>
                                </span>

                            </a>
                        </li>
                        <li className="nav-item m-0">
                            <a className="btn btn-sm btn-icon btn-light btn-color-muted btn-active-primary" data-bs-toggle="tab" href="#kt_project_users_table_pane">

                                <span className="svg-icon svg-icon-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="currentColor"></path>
                                        <path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="currentColor"></path>
                                    </svg>
                                </span>

                            </a>
                        </li>
                    </ul>


                </div>

            </div>
            <div className="tab-content">

                <div id="kt_project_users_card_pane" className="tab-pane fade active show">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5 g-xl-9">

                        <div className="col-md-4">

                            <div className="card card-flush h-md-100">

                                <div className="card-header">

                                    <div className="card-title">
                                        <h2>Equipe 1</h2>
                                    </div>

                                </div>

                                <div className="card-body pt-1">

                                    <div className="d-flex flex-column text-gray-600">
                                        <div className="d-flex align-items-center py-2">
                                            <span className="bullet bg-primary me-3"></span>KABLAN M. RICHMOND</div>
                                        <div className="d-flex align-items-center py-2">
                                            <span className="bullet bg-primary me-3"></span>YARDIMA M. HAMED</div>
                                        <div className="d-flex align-items-center py-2">
                                            <span className="bullet bg-primary me-3"></span>N'DOUFOU LAURENT</div>
                                        <div className="d-flex align-items-center py-2">
                                            <span className="bullet bg-primary me-3"></span>KABLAN J. HERSLEIN</div>
                                        <div className="d-flex align-items-center py-2">
                                            <span className="bullet bg-primary me-3"></span>KACOU FRANCIS</div>
                                        <div className="d-flex align-items-center py-2">
                                            <span className="bullet bg-primary me-3"></span>HIEN ALAIN</div>
                                        <div className="d-flex align-items-center py-2">
                                            <span className="bullet bg-primary me-3"></span>ADJO LANDRY</div>
                                    </div>

                                </div>

                                <div className="card-footer flex-wrap pt-0">
                                    <a href="/metronic8/demo1/../demo1/apps/user-management/roles/view.html" className="btn btn-light btn-active-primary my-1 me-2"><i className="bi bi-eye"></i> Détails Equipe</a>
                                    <button type="button" className="btn btn-light btn-active-light-primary my-1" data-bs-toggle="modal" data-bs-target="#kt_modal_update_role"><i className="bi bi-pencil"></i> Editer </button>
                                </div>

                            </div>

                        </div>
                        <div className="col-md-4">

                            <div className="card card-flush h-md-100">

                                <div className="card-header">

                                    <div className="card-title">
                                        <h2>Equipe 2</h2>
                                    </div>

                                </div>

                                <div className="card-body pt-1">

                                    <div className="d-flex flex-column text-gray-600">
                                        <div className="d-flex align-items-center py-2">
                                            <span className="bullet bg-primary me-3"></span>KABLAN M. RICHMOND</div>
                                        <div className="d-flex align-items-center py-2">
                                            <span className="bullet bg-primary me-3"></span>YARDIMA M. HAMED</div>
                                        <div className="d-flex align-items-center py-2">
                                            <span className="bullet bg-primary me-3"></span>N'DOUFOU LAURENT</div>
                                        <div className="d-flex align-items-center py-2">
                                            <span className="bullet bg-primary me-3"></span>KABLAN J. HERSLEIN</div>
                                        <div className="d-flex align-items-center py-2">
                                            <span className="bullet bg-primary me-3"></span>KACOU FRANCIS</div>
                                        <div className="d-flex align-items-center py-2">
                                            <span className="bullet bg-primary me-3"></span>HIEN ALAIN</div>
                                        <div className="d-flex align-items-center py-2">
                                            <span className="bullet bg-primary me-3"></span>ADJO LANDRY</div>
                                    </div>

                                </div>

                                <div className="card-footer flex-wrap pt-0">
                                    <a href="/metronic8/demo1/../demo1/apps/user-management/roles/view.html" className="btn btn-light btn-active-primary my-1 me-2"><i className="bi bi-eye"></i> Détails Equipe</a>
                                    <button type="button" className="btn btn-light btn-active-light-primary my-1" data-bs-toggle="modal" data-bs-target="#kt_modal_update_role"><i className="bi bi-pencil"></i> Editer </button>
                                </div>

                            </div>

                        </div>
                        <div className="col-md-4">

                            <div className="card card-flush h-md-100">

                                <div className="card-header">

                                    <div className="card-title">
                                        <h2>Equipe 3</h2>
                                    </div>

                                </div>

                                <div className="card-body pt-1">

                                    <div className="d-flex flex-column text-gray-600">
                                        <div className="d-flex align-items-center py-2">
                                            <span className="bullet bg-primary me-3"></span>KABLAN M. RICHMOND</div>
                                        <div className="d-flex align-items-center py-2">
                                            <span className="bullet bg-primary me-3"></span>YARDIMA M. HAMED</div>
                                        <div className="d-flex align-items-center py-2">
                                            <span className="bullet bg-primary me-3"></span>N'DOUFOU LAURENT</div>
                                        <div className="d-flex align-items-center py-2">
                                            <span className="bullet bg-primary me-3"></span>KABLAN J. HERSLEIN</div>
                                        <div className="d-flex align-items-center py-2">
                                            <span className="bullet bg-primary me-3"></span>KACOU FRANCIS</div>
                                        <div className="d-flex align-items-center py-2">
                                            <span className="bullet bg-primary me-3"></span>HIEN ALAIN</div>
                                        <div className="d-flex align-items-center py-2">
                                            <span className="bullet bg-primary me-3"></span>ADJO LANDRY</div>
                                    </div>

                                </div>

                                <div className="card-footer flex-wrap pt-0">
                                    <a href="/metronic8/demo1/../demo1/apps/user-management/roles/view.html" className="btn btn-light btn-active-primary my-1 me-2"><i className="bi bi-eye"></i> Détails Equipe</a>
                                    <button type="button" className="btn btn-light btn-active-light-primary my-1" data-bs-toggle="modal" data-bs-target="#kt_modal_update_role"><i className="bi bi-pencil"></i> Editer </button>
                                </div>

                            </div>

                        </div>

                        <div className="col-md-4">

                            <div className="card h-md-100">

                                <div className="card-body d-flex flex-center">

                                    <button type="button" className="btn btn-clear d-flex flex-column flex-center" data-bs-toggle="modal" data-bs-target="#kt_modal_add_role">

                                        <img src="/media/illustrations/sketchy-1/4.png" alt="" className="mw-100 mh-150px mb-7" />

                                        <div className="fw-bolder fs-3 text-gray-600 text-hover-primary">Former une équipe</div>

                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>

                <div id="kt_project_users_table_pane" className="tab-pane fade">

                    <div className="card card-flush">

                        <div className="card-body pt-0">

                            <div className="table-responsive">

                                <div id="kt_project_users_table_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                                    <div className="table-responsive">
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
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


        </>


    )


}