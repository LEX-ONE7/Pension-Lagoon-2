import * as React from 'react';
const Footer = () => {
  return (
    <div className="bg-info text-white text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Avis Clients</h5>

            <div className="overflow-auto">...</div>
            <div className="overflow-scroll">
              Petit aperçu de la culture polynésienne avec le village et le
              traditionnel "four Tahitien". Le repas est excellent ainsi que le
              spectacle. Visité en juin 2014 nono1664{' '}
            </div>
            <div className="overflow-scroll">
              Des animations sont prévus pour faire passer le temps entre les
              plats. Enfin le spectacle, où la rien à dire, il faut vraiment le
              voir!!! En résumé, le spectacle est vraiment à faire!!!! Visité en
              juillet 2014 ggzergzezethzethzg e ngjznegj jerzg iezjrg ij oize
              ozer okerzo jozjrg iezrgj ze jjzer j oreg ijzlkr jgzer nzge kn
              zknrz lk kllzre rze rze kikrejjgikkjjh rhe e jzt hjjthz hjzeg
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-white">
                  Plan du Site
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Nous Contacter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        © 2022 Copyright: Cet hôtel est la propriété de Lex Company
        <br />
        <a className="text-white" href="/">
          Lagoon Lodge est la propriété de Lex Tau
        </a>
      </div>
    </div>
  );
};
export default Footer;
