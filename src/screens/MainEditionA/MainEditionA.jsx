import React from "react";
import { Header } from "../../components/Header";
import { Item } from "../../components/Item";
import { StateDefaultWrapper } from "../../components/StateDefaultWrapper";
import { StateOpenWrapper } from "../../components/StateOpenWrapper";
import { Title } from "../../components/Title";
import { Value } from "../../components/Value";
import "./style.css";

export const MainEditionA = () => {
  return (
    <div className="main-edition-a">
      <div className="overlap-group">
        <div className="frame-4">
          <div className="icon-navigation-menu-wrapper">
            <img
              className="icon-navigation-menu"
              alt="Icon navigation menu"
              src="https://c.animaapp.com/qBYhTT9R/img/icon-navigation-menu-32px.svg"
            />
          </div>
          <div className="frame-5">
            <Item className="item-instance" divClassName="item-2" state="open-small" visible={false} />
            <div className="frame-5">
              <StateOpenWrapper
                className="item-3"
                iconAction="https://c.animaapp.com/qBYhTT9R/img/icon-action-assignment-24px.svg"
                state="close"
              />
              <StateOpenWrapper
                className="item-3"
                iconAction="https://c.animaapp.com/qBYhTT9R/img/icon-maps-restaurant-24px.svg"
                state="close"
              />
              <StateOpenWrapper
                className="item-3"
                iconAction="https://c.animaapp.com/qBYhTT9R/img/icon-social-people-24px.svg"
                state="close"
              />
            </div>
          </div>
          <div className="frame-5">
            <Item
              className="item-instance"
              divClassName="item-2"
              state="open-small"
              text="Planification"
              visible={false}
            />
            <div className="frame-5">
              <StateOpenWrapper
                className="item-3"
                iconAction="https://c.animaapp.com/qBYhTT9R/img/icon-action-shopping-basket-24px.svg"
                state="close"
              />
              <StateOpenWrapper className="item-3" state="close" />
              <StateOpenWrapper
                className="item-3"
                iconAction="https://c.animaapp.com/qBYhTT9R/img/icon-action-date-range-24px.svg"
                state="close"
              />
              <StateOpenWrapper
                className="item-3"
                iconAction="https://c.animaapp.com/qBYhTT9R/img/icon-content-how-to-reg-24px-2.svg"
                state="close"
              />
            </div>
          </div>
          <div className="frame-5">
            <Item
              className="item-instance"
              divClassName="item-2"
              state="open-small"
              text="Approvisionnements"
              visible={false}
            />
            <div className="frame-5">
              <StateOpenWrapper
                className="item-3"
                iconAction="https://c.animaapp.com/qBYhTT9R/img/icon-action-store-24px.svg"
                state="close"
              />
              <StateOpenWrapper className="item-3" state="close" />
              <StateOpenWrapper
                className="item-3"
                iconAction="https://c.animaapp.com/qBYhTT9R/img/icon-places-meeting-room-24px-2.svg"
                state="close"
              />
            </div>
          </div>
          <div className="frame-5">
            <Item
              className="item-instance"
              divClassName="item-2"
              state="open-small"
              text="Production"
              visible={false}
            />
            <div className="frame-5">
              <StateOpenWrapper
                className="item-3"
                iconAction="https://c.animaapp.com/qBYhTT9R/img/icon-av-repeat-24px-1.svg"
                state="close"
              />
            </div>
          </div>
          <div className="frame-6">
            <Item className="item-instance" divClassName="item-2" state="open-small" text="Stockage" visible={false} />
            <div className="frame-5">
              <StateOpenWrapper
                className="item-3"
                iconAction="https://c.animaapp.com/qBYhTT9R/img/icon-device-widgets-24px-1.svg"
                state="close"
              />
              <StateOpenWrapper
                className="item-3"
                iconAction="https://c.animaapp.com/qBYhTT9R/img/icon-action-dashboard-24px@2x.png"
                iconActionClassName="item-4"
                state="close"
              />
            </div>
          </div>
          <div className="frame-7">
            <Item className="item-instance" divClassName="item-2" state="open-small" text="Entrepôt" visible={false} />
            <div className="frame-5">
              <StateOpenWrapper
                className="item-3"
                iconAction="https://c.animaapp.com/qBYhTT9R/img/icon-action-dashboard-24px@2x.png"
                iconActionClassName="item-5"
                state="close"
              />
              <StateOpenWrapper
                className="item-3"
                iconAction="https://c.animaapp.com/qBYhTT9R/img/icon-action-dashboard-24px@2x.png"
                iconActionClassName="item-6"
                state="close"
              />
              <StateOpenWrapper
                className="item-3"
                iconAction="https://c.animaapp.com/qBYhTT9R/img/icon-action-dashboard-24px@2x.png"
                iconActionClassName="item-7"
                state="close"
              />
              <StateOpenWrapper
                className="item-3"
                iconAction="https://c.animaapp.com/qBYhTT9R/img/icon-action-dashboard-24px@2x.png"
                iconActionClassName="item-8"
                state="close"
              />
            </div>
          </div>
          <div className="frame-8">
            <Item className="item-instance" divClassName="item-2" state="open-small" text="Hubs" visible={false} />
            <div className="frame-5">
              <StateOpenWrapper
                className="item-3"
                iconAction="https://c.animaapp.com/qBYhTT9R/img/icon-action-dashboard-24px@2x.png"
                iconActionClassName="item-9"
                state="close"
              />
              <StateOpenWrapper
                className="item-3"
                iconAction="https://c.animaapp.com/qBYhTT9R/img/icon-action-dashboard-24px@2x.png"
                iconActionClassName="item-10"
                state="close"
              />
              <StateOpenWrapper
                className="item-3"
                iconAction="https://c.animaapp.com/qBYhTT9R/img/icon-action-dashboard-24px@2x.png"
                iconActionClassName="item-11"
                state="close"
              />
            </div>
          </div>
          <div className="frame-9">
            <Item
              className="item-instance"
              divClassName="item-2"
              state="open-small"
              text="Paramètres"
              visible={false}
            />
            <div className="frame-5">
              <StateOpenWrapper
                className="item-3"
                iconAction="https://c.animaapp.com/qBYhTT9R/img/icon-action-dashboard-24px@2x.png"
                iconActionClassName="item-12"
                state="close"
              />
              <StateOpenWrapper
                className="item-3"
                iconAction="https://c.animaapp.com/qBYhTT9R/img/icon-action-dashboard-24px@2x.png"
                iconActionClassName="item-13"
                state="close"
              />
              <StateOpenWrapper
                className="item-3"
                iconAction="https://c.animaapp.com/qBYhTT9R/img/icon-action-dashboard-24px@2x.png"
                iconActionClassName="item-14"
                state="close"
              />
              <StateOpenWrapper
                className="item-3"
                iconAction="https://c.animaapp.com/qBYhTT9R/img/icon-action-dashboard-24px@2x.png"
                iconActionClassName="item-15"
                state="close"
              />
            </div>
          </div>
        </div>
        <div className="frame-10">
          <Header
            className="header-instance"
            dateClassName="header-2"
            iconAction="https://c.animaapp.com/qBYhTT9R/img/icon-av-repeat-24px.svg"
            level1Text="Étapes de production"
            level2Text="/&nbsp;&nbsp;Sucy - Légumerie - 13/03/2023"
            primaryButtonPxText="TERMINER L&#39;ÉTAPE"
            showLevel3={false}
            visible={false}
          />
        </div>
        <div className="frame-11">
          <div className="frame-12">
            <div className="frame-13">
              <div className="group">
                <div className="rsum">
                  <div className="frame-14">
                    <div className="text-wrapper-3">Poireaux émincés</div>
                    <div className="bouton-puce">
                      <div className="item-16">En cours</div>
                    </div>
                  </div>
                  <div className="frame-15">
                    <div className="div-2">
                      <div className="text-wrapper-4">Type d’étape</div>
                      <div className="text-wrapper-5">Découpe</div>
                    </div>
                    <div className="div-2">
                      <div className="text-wrapper-4">Section</div>
                      <div className="text-wrapper-5">Poireaux + Carottes</div>
                    </div>
                    <div className="div-2">
                      <div className="text-wrapper-4">Recette concernée</div>
                      <p className="text-wrapper-5">A153 - Curry de légumes</p>
                    </div>
                  </div>
                </div>
                <div className="rsum-2">
                  <div className="frame-16">
                    <div className="frame-17">
                      <div className="text-wrapper-6">Heures théoriques</div>
                      <div className="frame-18">
                        <div className="frame-19">
                          <div className="frame-20">
                            <div className="text-wrapper-7">07:00</div>
                          </div>
                        </div>
                        <div className="frame-19">
                          <div className="frame-20">
                            <div className="text-wrapper-7">-</div>
                          </div>
                        </div>
                        <div className="frame-19">
                          <div className="frame-20">
                            <div className="text-wrapper-7">10:00</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-16">
                    <div className="frame-21">
                      <div className="text-wrapper-8">Heures réelles</div>
                      <div className="frame-18">
                        <div className="frame-19">
                          <div className="frame-20">
                            <div className="text-wrapper-9">07:21</div>
                          </div>
                        </div>
                        <div className="frame-19">
                          <div className="frame-20">
                            <div className="text-wrapper-9">-</div>
                          </div>
                        </div>
                        <div className="frame-19">
                          <div className="frame-20">
                            <div className="text-wrapper-7">{""}</div>
                            <div className="text-wrapper-10">07:00</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-22">
                <div className="frame-15">
                  <div className="code">
                    <div className="text-wrapper-11">Instructions</div>
                    <p className="p">
                      Placer les poireaux lavés puis émincé dans la découpeuse. Placer les poireaux lavés puis émincé
                      dans la découpeuse.
                    </p>
                  </div>
                </div>
                <div className="frame-23">
                  <div className="div-2">
                    <div className="text-wrapper-4">Machine</div>
                    <div className="text-wrapper-5">Découpeuse</div>
                  </div>
                  <div className="div-2">
                    <div className="text-wrapper-4">Paramétrage machine</div>
                    <div className="text-wrapper-5">Lame 5 mm</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-12">
            <div className="frame-wrapper">
              <div className="frame-24">
                <div className="frame-25">
                  <Value className="design-component-instance-node-2" state="empty" />
                  <Value className="value-instance" state="empty" />
                  <Value className="value-instance" state="empty" />
                  <Value className="value-instance" state="empty" />
                  <Value className="value-instance" state="empty" />
                  <Value className="value-instance" state="empty" />
                  <Value className="value-instance" state="empty" />
                  <Value className="value-instance" state="empty" />
                  <Value className="value-2" state="empty" />
                </div>
                <div className="colonne-2">
                  <Title
                    className="design-component-instance-node-2"
                    content="Éléments en entrée"
                    divClassName="title-instance"
                    state="default"
                  />
                  <StateDefaultWrapper
                    className="value-3"
                    content="Poireaux lavés"
                    divClassName="value-4"
                    state="default"
                  />
                  <StateDefaultWrapper
                    className="value-3"
                    content="Poireaux lavés"
                    divClassName="value-4"
                    state="default"
                  />
                  <StateDefaultWrapper
                    className="value-3"
                    content="Poireaux lavés"
                    divClassName="value-4"
                    state="default"
                  />
                  <StateDefaultWrapper
                    className="value-3"
                    content="Poireaux lavés"
                    divClassName="value-4"
                    state="default"
                  />
                  <StateDefaultWrapper
                    className="value-3"
                    content="Poireaux lavés"
                    divClassName="value-4"
                    state="default"
                  />
                  <StateDefaultWrapper
                    className="value-3"
                    content="Poireaux lavés"
                    divClassName="value-4"
                    state="default"
                  />
                  <StateDefaultWrapper
                    className="value-3"
                    content="Poireaux lavés"
                    divClassName="value-4"
                    state="default"
                  />
                  <StateDefaultWrapper
                    className="value-5"
                    content="Poireaux lavés"
                    divClassName="value-4"
                    state="default"
                  />
                </div>
                <div className="colonne-2">
                  <Title
                    className="design-component-instance-node-2"
                    content="Poids en entrée (kg)"
                    divClassName="title-instance"
                    state="default"
                  />
                  <StateDefaultWrapper className="value-6" content="175" divClassName="value-7" state="default" />
                  <StateDefaultWrapper className="value-6" content="175" divClassName="value-7" state="default" />
                  <StateDefaultWrapper className="value-6" content="175" divClassName="value-7" state="default" />
                  <StateDefaultWrapper className="value-6" content="175" divClassName="value-7" state="default" />
                  <StateDefaultWrapper className="value-6" content="175" divClassName="value-7" state="default" />
                  <StateDefaultWrapper className="value-6" content="175" divClassName="value-7" state="default" />
                  <StateDefaultWrapper className="value-6" content="175" divClassName="value-7" state="default" />
                  <StateDefaultWrapper className="value-8" content="175" divClassName="value-7" state="default" />
                </div>
                <div className="frame-25">
                  <Value className="design-component-instance-node-2" state="empty" />
                  <Value className="value-instance" state="empty" />
                  <Value className="value-instance" state="empty" />
                  <Value className="value-instance" state="empty" />
                  <Value className="value-instance" state="empty" />
                  <Value className="value-instance" state="empty" />
                  <Value className="value-instance" state="empty" />
                  <Value className="value-instance" state="empty" />
                  <Value className="value-2" state="empty" />
                </div>
              </div>
            </div>
            <div className="rsum-3">
              <div className="frame-21">
                <div className="text-wrapper-12">Poids théorique en sortie</div>
                <div className="frame-19">
                  <div className="frame-20">
                    <div className="text-wrapper-7">200 kg</div>
                  </div>
                </div>
              </div>
              <div className="frame-19">
                <div className="text-wrapper-13">Poids réel en sortie</div>
                <div className="frame-19">
                  <div className="frame-20">
                    <div className="text-wrapper-9">-</div>
                  </div>
                </div>
              </div>
              <div className="frame-19">
                <div className="text-wrapper-13">Écart en valeur</div>
                <div className="frame-19">
                  <div className="frame-20">
                    <div className="text-wrapper-9">-</div>
                  </div>
                </div>
              </div>
              <div className="frame-19">
                <div className="text-wrapper-13">Écart en %</div>
                <div className="frame-19">
                  <div className="frame-20">
                    <div className="text-wrapper-9">-</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="div-wrapper">
            <div className="frame-24">
              <div className="frame-25">
                <Value
                  className="design-component-instance-node-3"
                  iconActionPrint="https://c.animaapp.com/qBYhTT9R/img/icon-action-dashboard-24px@2x.png"
                  iconActionPrintClassName="value-9"
                  state="icons"
                />
                <Value className="value-10" state="empty" />
                <Value className="value-10" state="empty" />
                <Value className="value-11" state="empty" />
              </div>
              <div className="colonne-3">
                <Title
                  className="design-component-instance-node-3"
                  content="Date de création"
                  divClassName="title-instance"
                  state="default"
                />
                <StateDefaultWrapper
                  className="value-6"
                  content="Crée le 02/03/2023"
                  divClassName="value-12"
                  state="default"
                />
                <StateDefaultWrapper
                  className="value-6"
                  content="Crée le 01/03/2023"
                  divClassName="value-12"
                  state="default"
                />
                <StateDefaultWrapper
                  className="value-8"
                  content="Crée le 28/02/2023"
                  divClassName="value-12"
                  state="default"
                />
              </div>
              <div className="colonne-2">
                <Title
                  className="design-component-instance-node-3"
                  content="Commentaire"
                  divClassName="title-instance"
                  state="default"
                />
                <StateDefaultWrapper
                  className="value-6"
                  content="“Ne pas remplacer cet article par des courgettes”"
                  divClassName="value-12"
                  state="default"
                />
                <StateDefaultWrapper
                  className="value-6"
                  content="“Ne pas remplacer cet article par des courgettes”"
                  divClassName="value-12"
                  state="default"
                />
                <StateDefaultWrapper
                  className="value-8"
                  content="“Ne pas remplacer cet article par des courgettes”"
                  divClassName="value-12"
                  state="default"
                />
              </div>
              <div className="colonne-4">
                <Title
                  className="design-component-instance-node-3"
                  content="Membre"
                  divClassName="title-instance"
                  state="default"
                />
                <StateDefaultWrapper
                  className="value-6"
                  content="Samy Adjaout"
                  divClassName="value-12"
                  state="default"
                />
                <StateDefaultWrapper
                  className="value-6"
                  content="Samy Adjaout"
                  divClassName="value-12"
                  state="default"
                />
                <StateDefaultWrapper
                  className="value-8"
                  content="Samy Adjaout"
                  divClassName="value-12"
                  state="default"
                />
              </div>
              <div className="frame-25">
                <Value className="design-component-instance-node-3" state="empty" />
                <Value className="value-10" state="empty" />
                <Value className="value-10" state="empty" />
                <Value className="value-11" state="empty" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
