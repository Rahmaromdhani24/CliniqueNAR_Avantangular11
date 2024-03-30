import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-doctors',
  templateUrl: './all-doctors.component.html',
  styleUrl: './all-doctors.component.css'
})
export class AllDoctorsComponent {
  medecins = [
    { specialite: 'Neurosurgeon', nom: 'Collis Molate', image: '/assets/img/team1.jpg' },
    { specialite: 'Neurosurgeon', nom: 'Collis Molate', image: '/assets/img/team2.jpg' },
    { specialite: 'Neurosurgeon', nom: 'Collis Molate', image: '/assets/img/team3.jpg' },
    { specialite: 'Neurosurgeon', nom: 'Collis Molate', image: '/assets/img/team4.jpg' },
    { specialite: 'Neurosurgeon', nom: 'Collis Molate', image: '/assets/img/team1.jpg' },
    { specialite: 'Neurosurgeon', nom: 'Collis Molate', image: '/assets/img/team2.jpg' },
    { specialite: 'Neurosurgeon', nom: 'Collis Molate', image: '/assets/img/team3.jpg' },
    { specialite: 'Neurosurgeon', nom: 'Collis Molate', image: '/assets/img/team4.jpg' },

    // Ajoutez d'autres médecins selon vos besoins
  ];


}
