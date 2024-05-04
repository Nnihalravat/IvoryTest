import { Component, OnInit } from '@angular/core';
import { RegistrationServiceService } from '../registration-service.service';

@Component({
  selector: 'app-delete-users',
  templateUrl: './delete-users.component.html',
  styleUrls: ['./delete-users.component.css']
})
export class DeleteUsersComponent implements OnInit {


  deleteSuccess: boolean = false;

  constructor(private userService: RegistrationServiceService) { }

// Define a flag to track whether deletion operation is in progress
deletionInProgress: boolean = false;

deleteAll() {
  // Check if deletion is already in progress
  if (this.deletionInProgress) {
    console.log("Deletion already in progress. Please wait.");
    return;
  }
  // Set the flag to indicate that deletion is in progress
  this.deletionInProgress = true;
  this.userService.deleteRegisters().subscribe(
    (res) => {
      // Handle success case here
      // Delete operation can be performed here
      console.log("Deletion successful");
      alert("All Registers deleted Successfully");
      // Reset the flag once deletion is complete
      this.deletionInProgress = false;
      setTimeout(() => {
        this.deleteSuccess = true
      }, 1000);
    },
    (error) => {
      // Handle error case here
      // Since you don't want to show an error, you can simply log it
      console.error("Error while deleting:", error);
      alert("No data to delete.");
      // Reset the flag in case of error as well
      this.deletionInProgress = false;
    }
  );
}
  ngOnInit(): void {
    
  }
}