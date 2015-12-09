/**
 * Created by Romain Gaillard on 09/12/2015.
 */


angular.module('home.controllers',[])

    .controller('HomeCtrl', ['$scope', '$state', function ($scope, $state) {

        // ======== LES VARIABLES DU SCOPE ==========================

        // ======== VARIABLES INTERNES ===============================

        // ======== INITIALISATION ===================================

        // ========= LES ROUTES ======================================

        $scope.goToDebat = function(){
            $state.go("debats");
        }

        // ========= LES FONCTIONS DU SCOPE ============================

        // ========= LES FONCTIONS INTERNES ============================


        // ========= LES POPUPS ========================================

        // ========= LES EVENEMENTS ====================================

    }])
