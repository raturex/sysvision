import React from "react";
import { PageTitle } from '../../../_metronic/layout/core'
import { KTSVG,toAbsoluteUrl } from "../../../_metronic/helpers";
export function SupervisionPage() {
    return (
        <>
            <PageTitle breadcrumbs={[]}>Gestion des supervisions</PageTitle>
            
            <div className="card">

                <div className="card-body">

                    <div className={`card`}>
                        {/* begin::Header */}
                        <div className='card-header border-0 pt-5'>
                            <h3 className='card-title align-items-start flex-column'>
                                <span className='card-label fw-bolder fs-3 mb-1'>Liste des types de supervision</span>
                                <span className='text-muted mt-1 fw-bold fs-7'>Total </span>
                            </h3>
                            <div className='card-toolbar'>
                                <a href='#' className='btn btn-sm btn-light-primary' data-bs-toggle="modal" data-bs-target="#kt_modal_new_target">
                                    <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                                    Nouveau type
                                </a>
                            </div>
                        </div>
                        {/* end::Header */}
                        {/* begin::Body */}
                        <div className='card-body py-3'>
                            {/* begin::Table container */}
                            <div className='table-responsive'>
                                {/* begin::Table */}
                                <table className='table table-row-dashed table-row-gray-300 align-middle gs-0'>
                                    {/* begin::Table head */}
                                    <thead>
                                        <tr className='fw-bolder text-muted bg-light'>
                                            <th className='ps-4 min-w-425px rounded-start'>Nom supervison</th>
                                            <th className='ps-4 min-w-225px rounded-start'>Prime supervision</th>
                                            <th className='min-w-200px'>Date cr&eacute;ation</th>
                                            <th className='min-w-50px'>Statut</th>
                                            <th className='min-w-200px text-end rounded-end'></th>
                                        </tr>
                                    </thead>
                                    {/* end::Table head */}
                                    {/* begin::Table body */}
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className='d-flex align-items-center'>
                                                    <div className='symbol symbol-50px me-5'>
                                                        <span className="symbol-label bg-light-success text-black fw-bolder">C</span>
                                                    </div>
                                                    <div className='d-flex justify-content-start flex-column'>
                                                        Coordiantion
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                                                    114 000 Fcfa
                                                </a>

                                            </td>           
                                            <td>
                                                <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                                                    02-02-2022 13h20
                                                </a>

                                            </td>
                                            <td>
                                                <span className='badge badge-light-success fs-7 fw-bold'>Actif</span>
                                            </td>
                                            <td className='text-end'>
                                                <a
                                                    href='#'
                                                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                                >
                                                    <KTSVG path='/media/icons/duotune/general/gen019.svg' className='svg-icon-3' />
                                                </a>
                                                <a
                                                    href='#'
                                                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                                >
                                                    <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                                                </a>
                                                <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                                                    <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='d-flex align-items-center'>
                                                    <div className='symbol symbol-50px me-5'>
                                                    <span className="symbol-label bg-light-primary text-black fw-bolder">EM</span>
                                                    </div>
                                                    <div className='d-flex justify-content-start flex-column'>
                                                        Etat Major
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                                                    114 000 Fcfa
                                                </a>

                                            </td>            
                                            <td>
                                                <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                                                    02-02-2022 13h20
                                                </a>

                                            </td>
                                            <td>
                                                <span className='badge badge-light-success fs-7 fw-bold'>Actif</span>
                                            </td>
                                            <td className='text-end'>
                                                <a
                                                    href='#'
                                                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                                >
                                                    <KTSVG path='/media/icons/duotune/general/gen019.svg' className='svg-icon-3' />
                                                </a>
                                                <a
                                                    href='#'
                                                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                                >
                                                    <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                                                </a>
                                                <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                                                    <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='d-flex align-items-center'>
                                                    <div className='symbol symbol-50px me-5'>
                                                    <span className="symbol-label bg-light-warning text-black fw-bolder">IAM</span>
                                                    </div>
                                                    <div className='d-flex justify-content-start flex-column'>
                                                        Infrastructure Applicative Metier
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                                                    114 000 Fcfa
                                                </a>

                                            </td>            
                                            <td>
                                                <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                                                    02-02-2022 13h20
                                                </a>

                                            </td>
                                            <td>
                                                <span className='badge badge-light-success fs-7 fw-bold'>Actif</span>
                                            </td>
                                            <td className='text-end'>
                                                <a
                                                    href='#'
                                                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                                >
                                                    <KTSVG path='/media/icons/duotune/general/gen019.svg' className='svg-icon-3' />
                                                </a>
                                                <a
                                                    href='#'
                                                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                                >
                                                    <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                                                </a>
                                                <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                                                    <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='d-flex align-items-center'>
                                                    <div className='symbol symbol-50px me-5'>
                                                    <span className="symbol-label bg-light-info text-black fw-bolder">IS</span>
                                                    </div>
                                                    <div className='d-flex justify-content-start flex-column'>
                                                        Infrastructure Serveurs
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                                                    114 000 Fcfa
                                                </a>

                                            </td>            
                                            <td>
                                                <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                                                    02-02-2022 13h20
                                                </a>

                                            </td>
                                            <td>
                                                <span className='badge badge-light-success fs-7 fw-bold'>Actif</span>
                                            </td>
                                            <td className='text-end'>
                                                <a
                                                    href='#'
                                                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                                >
                                                    <KTSVG path='/media/icons/duotune/general/gen019.svg' className='svg-icon-3' />
                                                </a>
                                                <a
                                                    href='#'
                                                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                                >
                                                    <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                                                </a>
                                                <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                                                    <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='d-flex align-items-center'>
                                                    <div className='symbol symbol-50px me-5'>
                                                    <span className="symbol-label bg-light-danger text-black fw-bolder">RI</span>
                                                    </div>
                                                    <div className='d-flex justify-content-start flex-column'>
                                                        Reseau Informatique
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                                                    114 000 Fcfa
                                                </a>

                                            </td>            
                                            <td>
                                                <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                                                    02-02-2022 13h20
                                                </a>

                                            </td>
                                            <td>
                                                <span className='badge badge-light-success fs-7 fw-bold'>Actif</span>
                                            </td>
                                            <td className='text-end'>
                                                <a
                                                    href='#'
                                                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                                >
                                                    <KTSVG path='/media/icons/duotune/general/gen019.svg' className='svg-icon-3' />
                                                </a>
                                                <a
                                                    href='#'
                                                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                                >
                                                    <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                                                </a>
                                                <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                                                    <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='d-flex align-items-center'>
                                                    <div className='symbol symbol-50px me-5'>
                                                        <span className="symbol-label bg-light-black text-black fw-bolder">SU</span>
                                                    </div>
                                                    <div className='d-flex justify-content-start flex-column'>
                                                        Support aux utilisateurs
                                                    </div>
                                                </div>
                                            </td> 
                                            <td>
                                                <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                                                    114 000 Fcfa
                                                </a>

                                            </td>           
                                            <td>
                                                <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                                                    02-02-2022 13h20
                                                </a>

                                            </td>
                                            <td>
                                                <span className='badge badge-light-success fs-7 fw-bold'>Actif</span>
                                            </td>
                                            <td className='text-end'>
                                                <a
                                                    href='#'
                                                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                                >
                                                    <KTSVG path='/media/icons/duotune/general/gen019.svg' className='svg-icon-3' />
                                                </a>
                                                <a
                                                    href='#'
                                                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                                >
                                                    <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                                                </a>
                                                <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                                                    <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className='d-flex align-items-center'>
                                                    <div className='symbol symbol-50px me-5'>
                                                        <span className="symbol-label bg-light-secondary text-black fw-bolder">T</span>
                                                    </div>
                                                    <div className='d-flex justify-content-start flex-column'>
                                                        Télécommunication
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                                                    114 000 Fcfa
                                                </a>

                                            </td>            
                                            <td>
                                                <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                                                    02-02-2022 13h20
                                                </a>

                                            </td>
                                            <td>
                                                <span className='badge badge-light-success fs-7 fw-bold'>Actif</span>
                                            </td>
                                            <td className='text-end'>
                                                <a
                                                    href='#'
                                                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                                >
                                                    <KTSVG path='/media/icons/duotune/general/gen019.svg' className='svg-icon-3' />
                                                </a>
                                                <a
                                                    href='#'
                                                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                                >
                                                    <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                                                </a>
                                                <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                                                    <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                                                </a>
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
            <div className='modal fade' id='kt_modal_new_target' aria-hidden='true'>
                <div className='modal-dialog modal-dialog-centered'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h2>Nouveau Groupe</h2>

                            <div className='btn btn-sm btn-icon btn-active-color-primary' data-bs-dismiss='modal'>
                                <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-1' />
                            </div>
                        </div>

                        <div className='modal-body py-lg-10 px-lg-10'>
                                <div className="mb-10">
                                    <label className="form-label">Nom Groupe</label>
                                    <input
                                        type="text"
                                        className="form-control text-uppercase"
                                        placeholder="Nom du groupe"
                                    />
                                </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-light"
                                    data-bs-dismiss="modal"
                                >
                                    Fermer
                                </button>
                                <button type="button" className="btn btn-primary">
                                    Ajouter
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )


}