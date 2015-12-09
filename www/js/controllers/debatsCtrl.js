/**
 * Created by Romain Gaillard on 09/12/2015.
 */


angular.module('debats.controllers',[])

    .controller('DebatsCtrl', ['$scope', '$state', function ($scope, $state) {

        // ======== LES VARIABLES DU SCOPE ==========================

        $scope.catSrx = ["Art","Acteur","Sport","Histoire","Politique","Technologie","Ecologie","Gastronomie"]

        // ======== VARIABLES INTERNES ===============================

        // ======== INITIALISATION ===================================

        // ========= LES ROUTES ======================================

        $scope.goToHome = function(){
            $state.go("app");
        }

        $scope.goToSerious = function(){
            $state.go("serious");
        }

        $scope.goToDebats = function(){
            $state.go("debats");
        }
        // ========= LES FONCTIONS DU SCOPE ============================

        // ========= LES FONCTIONS INTERNES ============================


        // ========= LES POPUPS ========================================

        // ========= LES EVENEMENTS ====================================

    }])
