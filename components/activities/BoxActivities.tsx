import * as React from 'react';
import SliderAuto from '../SliderAuto';
const BoxActivities = () => (
  <div className="container-fluid ">
    <div className="row">
      <div className="col-12 bg-white">
        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="text-bg-secondary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-4 py-4">
              <h2 className="display-6">Activités</h2>
              <p className="lead">Sublimez Votre Expérience.</p>
            </div>
            <div
              className="bg-light shadow-sm mx-auto"
              style={{
                width: '80%',
                height: '300px',
                bordeRadius: '21px 21px 0 0 ',
              }}
            ></div>
            <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
              <div className="bg-info me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                <div className="my-3 p-3">
                  <h2 className="display-5">Nautiques</h2>
                  <p className="lead">
                    Entouré par les eaux cristallines de l'océan Pacifique Sud,
                    l'InterContinental Tahiti Resort & Spa propose une mutitude
                    de sports nautiques. Offrez-vous une excursion guidée de
                    plongée en apnée ou une sortie en voilier, partez à
                    l'aventure pour surfer les vagues de Tahiti ou faites le
                    plein de sensations aquatiques en paddle, kayak ou en jet ski.{' '}
                  </p>
                </div>
                <div
                  className="bg-white shadow-sm mx-auto"
                  style={{
                    width: '100%',
                    height: '400px',
                    bordeRadius: '21px 21px 0 0 ',
                  }}
                >
                  <SliderAuto collection="LocationMarine" />
                </div>
              </div>
              <div className="text-bg-primary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                <div className="my-3 py-3">
                  <h2 className="display-5">Terrestres</h2>
                  <p className="lead">
                    {' '}
                    Tahiti est une île regorgeant de trésors cachés, de ses
                    vallées verdoyantes à ses lagons scintillants. Pour
                    découvrir l'île sous tous ses aspects, nous proposons des
                    excursions tous terrains, pour tous les niveaux de forme
                    physique. Faites le tour de l'île accompagné d'un guide,
                    explorez Tahiti en 4x4, partez à l'aventure hors des
                    sentiers battus ou en promenade sur les chemins balisés à
                    travers la jungle.
                  </p>
                </div>

                <div
                  className="bg-light shadow-sm mx-auto"
                  style={{
                    width: '100%',
                    height: '400px',
                    bordeRadius: '21px 21px 0 0 ',
                  }}
                >
                <SliderAuto collection="Location" />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default BoxActivities;

function rgba(arg0: number, arg1: number, arg2: number, arg3: number): any {
  throw new Error('Function not implemented.');
}

function deg(
  arg0: number,
  deg: any,
  arg2: any,
  arg3: number,
  arg4: number,
  arg5: number,
  arg6: number,
  arg7: number
) {
  throw new Error('Function not implemented.');
}

function gradient(
  arg0: number,
  deg: (
    arg0: number,
    deg: any,
    arg2: any,
    arg3: number,
    arg4: number,
    arg5: number,
    arg6: number,
    arg7: number
  ) => void,
  arg2: any,
  arg3: number,
  arg4: number,
  arg5: number,
  arg6: any,
  arg7: number,
  D0C7: any,
  arg9: number
) {
  throw new Error('Function not implemented.');
}
