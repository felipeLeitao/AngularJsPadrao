(

function () {

    //não deixar criar variavel sem o var
    'use strict';

    angular.module('app').controller('listarController', listarController);

    listarController.$inject = ['$scope', 'amigoService'];

    function listarController($scope, amigoService) {

        var vm = this;

        vm.listaAmigos = [];

        amigoService.listar().then(function (retorno) {
            vm.listaAmigos = retorno.data;
        });


    }
}

)();