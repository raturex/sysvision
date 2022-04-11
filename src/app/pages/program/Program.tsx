import React from "react";
import { PageTitle } from '../../../_metronic/layout/core'
import { KTSVG, toAbsoluteUrl } from "../../../_metronic/helpers";


export function ProgramPage() {
    const monStyle = {
        touchAction: "pan-y",
        WebkitUserDrag: "none",
        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
        height: "352px"
    }
    return (
        <>
            <PageTitle breadcrumbs={[]}>Programme Astreinte</PageTitle>

            <div className="row">
                <div className="col-xxl-3">
                    <form action="#" data-select2-id="select2-data-142-rc5e">

                        <div className="card" data-select2-id="select2-data-141-ylgu">

                            <div className="card-body" data-select2-id="select2-data-140-3tbj">

                                <div className="position-relative">

                                    <span>Etablir un programme</span>
                                </div>

                                <div className="separator separator-dashed my-8"></div>

                                <div className="mb-5" data-select2-id="select2-data-139-mvat">
                                    <label className="fs-6 form-label fw-bolder text-dark">Team Type</label>

                                    <select className="form-select form-select-solid select2-hidden-accessible" data-control="select2" data-placeholder="In Progress" data-hide-search="true" data-select2-id="select2-data-10-nygq" aria-hidden="true">
                                        <option value="" data-select2-id="select2-data-143-auu0"></option>
                                        <option value="1" data-select2-id="select2-data-144-8joq">Not Started</option>

                                        <option value="3" data-select2-id="select2-data-145-amcn">Done</option>
                                    </select>

                                </div>

                                <div className="mb-5">
                                    <label className="fs-6 form-label fw-bolder text-dark">Team Name</label>
                                    <input type="text" className="form-control form-control form-control-solid" name="city" />
                                </div>

                                <div className="mb-5">
                                    <label className="fs-6 form-label fw-bolder text-dark">Team Size</label>

                                    <div className="nav-group nav-group-fluid">

                                        <label>
                                            <input type="radio" className="btn-check" name="type" value="users" />
                                            <span className="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bolder px-4">5-10</span>
                                        </label>

                                        <label>
                                            <input type="radio" className="btn-check" name="type" value="orders" />
                                            <span className="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bolder px-4">10++</span>
                                        </label>

                                    </div>

                                </div>



                            </div>

                        </div>

                    </form>
                </div>
                <div className="col-xxl-9">
                    <div className="d-flex flex-wrap flex-stack pb-7">
                        <div className="d-flex flex-wrap align-items-center my-1">
                            <h3 className="fw-bolder me-5 my-1">Semaine I </h3>
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

                        <div id="kt_project_users_card_pane" className="tab-pane fade ">
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

                        <div id="kt_project_users_table_pane" className="tab-pane fade active show">

                            <div className="card card-flush">

                                <div className="card-body pt-0">

                                    <div className="table-responsive">

                                        <div id="kt_project_users_table_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                                            <div className="table-responsive">
                                                <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
                                                    {/* begin::Table head */}
                                                    <thead>
                                                        <tr className='fw-bolder text-muted'>
                                                            <th className='min-w-200px'>Noms & prénoms</th>
                                                            <th className='min-w-130px'>Contact 1</th>
                                                            <th className='min-w-130px'>Contact 2</th>
                                                            <th className='min-w-50px '>Groupe</th>
                                                        </tr>
                                                    </thead>
                                                    {/* end::Table head */}
                                                    {/* begin::Table body */}
                                                    <tbody>
                                                        <tr>

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
                                                                    + 225 08017730
                                                                </span>
                                                            </td>
                                                            <td className="text-black fw-bold fs-7">
                                                                Coordination
                                                            </td>
                                                        </tr>
                                                        <tr>

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
                                                                    + 225 08017730
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className='text-black fw-bold d-block fs-7'>
                                                                    Coordination
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>

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
                                                                    + 225 08017730
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className='text-black fw-bold d-block fs-7'>
                                                                    Coordination
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>

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
                                                                    + 225 08017730
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className='text-black fw-bold d-block fs-7'>
                                                                    Coordination
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>

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
                                                                    + 225 08017730
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className='text-black fw-bold d-block fs-7'>
                                                                    Coordination
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>

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
                                                                    + 225 08017730
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className='text-black fw-bold d-block fs-7'>
                                                                    Coordination
                                                                </span>
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
                </div>
            </div>





        </>


    )


}