import { Component } from '@angular/core';
import { HomeSearch } from '../../components/home-search/home-search';

interface Category {
  title: string;
  description: string;
  tone: 'green' | 'sand' | 'clay' | 'sky';
  // Tracé SVG de l'icône (viewBox 24x24, trait)
  icon: string;
}

interface Step {
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  imports: [HomeSearch],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly categories: Category[] = [
    {
      title: 'Vente',
      description: 'Achetez ou vendez chiens, chats, oiseaux, chevaux ou bétail en toute simplicité.',
      tone: 'green',
      icon: 'M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82zM7 7h.01',
    },
    {
      title: 'Adoption',
      description: 'Offrez un foyer à un animal qui attend une famille. L’adoption est gratuite.',
      tone: 'clay',
      icon: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z',
    },
    {
      title: 'Dons',
      description: 'Vous ne pouvez plus garder votre animal ? Confiez-le à quelqu’un de confiance.',
      tone: 'sand',
      icon: 'M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z',
    },
    {
      title: 'Perdus & Trouvés',
      description: 'Signalez un animal perdu ou trouvé et aidez-le à retrouver sa famille.',
      tone: 'sky',
      icon: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0z',
    },
  ];

  protected readonly steps: Step[] = [
    {
      title: 'Créez votre compte',
      description: 'Inscrivez-vous gratuitement en quelques secondes.',
    },
    {
      title: 'Publiez votre annonce',
      description: 'Ajoutez des photos, une description et la ville où se trouve l’animal.',
    },
    {
      title: 'Échangez en confiance',
      description: 'Discutez avec les personnes intéressées et suivez nos conseils de sécurité.',
    },
  ];
}
