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
            <PageTitle breadcrumbs={[]}>Planning Astreinte Normale</PageTitle>

            <div className="row">
                <div className="col-xxl-3 row">
                    <div className="col-lg-12">
                        <form action="#" data-select2-id="select2-data-142-rc5e">

                            <div className="card" data-select2-id="select2-data-141-ylgu">

                                <div className="card-body" data-select2-id="select2-data-140-3tbj">

                                    <div className="position-relative">

                                        <h5 className="fw-bolder">Etablir un Planning</h5>
                                    </div>

                                    <div className="separator separator-dashed my-8"></div>

                                    <div className="mb-5" data-select2-id="select2-data-139-mvat">
                                        <label className="fs-6 form-label fw-bolder text-dark">Type planification</label>

                                        <select className="form-select form-select select2-hidden-accessible" data-control="select2" data-placeholder="In Progress" data-hide-search="true" data-select2-id="select2-data-10-nygq" aria-hidden="true">
                                            <option value="" data-select2-id="select2-data-143-auu0">Sélectionnez un type</option>
                                            <option value="1" data-select2-id="select2-data-144-8joq">Supervision Normale</option>

                                            <option value="3" data-select2-id="select2-data-145-amcn">Supervision Quart</option>
                                        </select>

                                    </div>

                                    <div className="mb-5">
                                        <label className="fs-6 form-label fw-bolder text-dark">Fréquence</label>
                                        <select className="form-select form-select select2-hidden-accessible" data-control="select2" data-placeholder="In Progress" data-hide-search="true" data-select2-id="select2-data-10-nygq" aria-hidden="true">
                                            <option value="" data-select2-id="select2-data-143-auu0">Sélectionnez une fréquence</option>
                                            <option value="1" data-select2-id="select2-data-144-8joq">Hebdomadaire</option>
                                            <option value="3" data-select2-id="select2-data-145-amcn">Mensuelle</option>
                                            <option value="3" data-select2-id="select2-data-145-amcn" disabled>Trimestrielle</option>
                                            <option value="3" data-select2-id="select2-data-145-amcn" disabled>Annuelle</option>
                                        </select>
                                    </div>

                                    <div className="mb-5">
                                        <button className=" fs-6 btn w-100 btn-light-success ">Génerer</button>
                                    </div>

                                </div>

                            </div>

                        </form>
                    </div>
                    <div className="col-lg-12">
                        <div className="mb-5">
                            <a href="#" className="fs-6 btn w-100 btn-secondary" data-bs-toggle="modal" data-bs-target="#kt_modal_new_target"> <i className="bi bi-eye fs-2x"></i> Visualiser planning</a>
                        </div>
                        <div className="mb-5">
                            <button className=" fs-6 btn w-100 btn-info ">Bon pour accord</button>

                        </div>
                    </div>

                </div>
                <div className="col-xxl-9">
                    <div className="d-flex flex-wrap flex-stack pb-7">
                        <div className="d-flex flex-wrap align-items-center my-1">
                            <h4 className="fw-bolder me-5 my-1"> Planning Hedbomadaire</h4> <h4 className="fw-bolder me-5 my-1">|</h4> <h3 className="fw-bolder me-5 my-1">Semaine I </h3> <div className="badge badge-light-warning">Période du 09 Avril - 17 Avril</div>
                        </div>

                        <div className="d-flex flex-wrap my-1" data-select2-id="select2-data-129-43ke">
                            <select className="form-select">
                                <option>Semaine 1</option>
                                <option>Semaine 2</option>
                                <option>Semaine 3</option>
                                <option>Semaine 4</option>
                            </select>
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
            <div className='modal fade' id='kt_modal_new_target' aria-hidden='true'>
                <div className='modal-dialog modal-dialog-centered mw-900px'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h2>Planning Hebdomadaire</h2>

                            <div className='btn btn-sm btn-icon btn-active-color-primary' data-bs-dismiss='modal'>
                                <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-1' />
                            </div>
                        </div>

                        <div className='modal-body py-lg-10 px-lg-10'>

                            <div className="table-responsive h-500px">

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
                                                    <td colSpan={4}> <h5 className="fw-bold">Semaine I </h5></td>
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
                                                <tr>
                                                    <td colSpan={4}> <h5 className="fw-bold">Semaine II </h5></td>
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

        </>


    )


}