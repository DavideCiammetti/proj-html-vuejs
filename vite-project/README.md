# progetto html vue js

Progetto di una pagina web creata utilizzando il framework "vue js" e scss-css per lo style. 

## organizzazione di progetto 

ho suddiviso il progetto in 3 componenti principali che sono AppHeader, AppMain e AppFooter ai quali vado a collegare le seguenti directory che contengono i miei components:

- components
    - AppHeader
        - ElementiHeader    ---directory
            - ButtonNav.vue
            - LanguageChiuce.vue 
            - Navbar.vue
            - SocialListNav.vue

    - AppMain
        - ElementiMain   ---directory
            - Section1 ---directory sezione 1
                - centralComponentsSec1   ---directory
                    - Cards.vue
                    - CentralContainer.vue
                    - Image.vue
                    - MainTitle.vue
                -  MainMenuitems ---directory
                    - Grid.vue
                    - SectionOne.vue
            - section2  ---directory
                - NoticeInfo.vue
                - SectionTwo.vue
            - section3 --- directory
                - 3ButtonTypes
                    - GreenButton.vue
                    - RedButton.vue
                    - YellowButton.vue
                - DropRightMenu.vue
                - MaterialsGrid.vue
                - MaterialsList.vue
                - SectionThree.vue
                - YellowBandOverImg.vue
            - section4 ---directory
                - SectionFour.vue
                - statistics.vue
                - SubscribeComponents.vue
                - TitleSection.vue
            - section5 ---directory
                - Carousel.vue
                - CarouselButton.vue
                - CarouselTitle.vue
                - SectionFive.vue
            - section6
                - SectionSix.vue
                - TeachAndBusinness.vue
            - section7 ---directory
                - InfoSection.vue
                - SectionSeven.vue


    - AppFooter 
        - ElementiFooter    ---directory
            - BlogList.vue
            - ContactList.vue
            - PagesList.vue
            - SocialFootList.vue


## Gestione dati 
per la gestione dati ho usato il file **"store.js"** nel quale poi ho collegato altri 2 file archiviati nella directory--> dataConfig in --> src:

- dataConfig
    - footerDataConfig.js
    - headerDataConfig.js


## Style 

per lo style ho racchiuso tutto nella directory **"style"**  dove al suo interno ci sono le variabili che ho usato e lo stile principale 

- style
    - partials --directory 
        - _variables.scss
    - style.scss

## Immagini

tutte le immagni di progetto sono racchiuse all'interno di assets

divise per utilita di sezione: 

- assets ---directory
    - img ---directory
        - img-footer  ---directory
        - img-section-1  ---directory
        - img-section-2  ---directory
        - img-section-3-5  ---directory
        - img-section-4  ---directory
        - img-section-6  ---directory
        - img-section-7  ---directory
        - logo ---directory

## immagine del progetto da eseguire

![image link](src/assets/img/logo/screenshot.png)