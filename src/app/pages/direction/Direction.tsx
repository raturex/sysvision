import React from "react";
import { PageTitle } from '../../../_metronic/layout/core'
import { KTSVG, toAbsoluteUrl } from "../../../_metronic/helpers";
export function DirectionPage() {
    return (
        <>
            <PageTitle breadcrumbs={[]}>Directions</PageTitle>
            <div className="card">

                <div className="card-body">

                    <div className="card-px text-center pt-15 pb-15">



                        <p className="text-gray-400 fs-4 fw-bold py-7">Aucune direction ajoutée veuillez en créer une nouvelle.</p>

                        <a href="#" className="btn btn-primary er fs-6 px-8 py-4" data-bs-toggle="modal" data-bs-target="#kt_modal_new_target"> <i className="fas fa-plus-circle fs-1x"></i> Ajouter une direction</a>

                    </div>

                    <div className="text-center pb-10 px-4">
                        <img src="/media/svg/perso/department.svg" alt="" className="mw-100 h-200px h-sm-325px" />
                    </div>

                </div>

            </div>
            <div className="card">

                <div className="card-body">

                    <div className={`card`}>
                        {/* begin::Header */}
                        <div className='card-header border-0 pt-5'>
                            <h3 className='card-title align-items-start flex-column'>
                                <span className='card-label fw-bolder fs-3 mb-1'>Liste des directions</span>
                                <span className='text-muted mt-1 fw-bold fs-7'>Total </span>
                            </h3>
                            <div className='card-toolbar'>
                                <a href='#' className='btn btn-sm btn-light-primary' data-bs-toggle="modal" data-bs-target="#kt_modal_new_target">
                                    <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
                                    Nouvelle Direction
                                </a>
                            </div>
                        </div>
                        {/* end::Header */}
                        {/* begin::Body */}
                        <div className='card-body py-3'>
                            {/* begin::Table container */}
                            <div className='table-responsive'>
                                {/* begin::Table */}
                                <table className='table align-middle gs-0 gy-4'>
                                    {/* begin::Table head */}
                                    <thead>
                                        <tr className='fw-bolder text-muted bg-light'>
                                            <th className='ps-4 min-w-325px rounded-start'>Nom </th>
                                            <th className='ps-4 min-w-325px rounded-start'>Nom Société </th>
                                            <th className='min-w-125px'>Date cr&eacute;ation</th>
                                            <th className='min-w-150px'>Statut</th>
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
                                                        <img
                                                            src={toAbsoluteUrl('/media/avatars/blank.png')}
                                                            className=''
                                                            alt=''
                                                        />
                                                    </div>
                                                    <div className='d-flex justify-content-start flex-column'>
                                                        Pôle SI
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                GS2E
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
                            <h2>Nouvelle Direction</h2>

                            <div className='btn btn-sm btn-icon btn-active-color-primary' data-bs-dismiss='modal'>
                                <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-1' />
                            </div>
                        </div>

                        <div className='modal-body py-lg-10 px-lg-10'>
                            <div className="mb-10">
                                <label className="form-label">Nom Société</label>
                                <select className="form-select" aria-label="Select example">
                                    <option>Sélectionnez un élément</option>
                                    <option value="1">CIE</option>
                                    <option value="2">GS2E</option>
                                    <option value="3">SODECI</option>
                                </select>
                            </div>

                            <div className="mb-10">
                                <label className="form-label">Nom Direction</label>
                                <input
                                    type="text"
                                    className="form-control text-uppercase"
                                    placeholder="Nom de la direction"
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