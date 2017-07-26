1) Open a command prompt in the project's root directory (APM)

2) Type: `npm install`
    This installs the dependencies as defined in the package.json file.
    
3) Type: `npm start`
    This launches the TypeScript compiler (tsc) to compile the application and wait for changes. 
    It also starts the lite-server and launches the browser to run the application.


    #Structural Directives

    *ngIf and *ngFor
        Remember to Prefix with an asterisk sign
        Adding to a quoted string express


    ##Use
    *ngIf
     Expression is evaluated as a true or false values

     *ngFor
       Define the local variable with let
       Specify  'of' : 'let' product of products


   Data Binding
    Component to DOM
       ## interpolation: {pageTitle}
       ## Property Binding :
        '''js

            <img *ngIf="showImage"
                            [src]="product.imageUrl"
                            [title]="product.productName"
                            [style.width.px]="imageWidth"
                             [style.margin.px]="imageMargin"

                              >

        '''
   ## Event Binding - Listen for event

    DOM ->  Component
    '''js

      <button class="btn btn-primary"
             (click)="toggleImage()">
             {{showImage ? 'Hide': 'Show'}} Product Image
             </button>
    '''


    ##Two-Way Binding
        Component to DOM

         <input type="text"
             [(ngModel)] = 'listFilter'/>


         ngModel
            Define ngModel as a Banana in a box
            Be sure to add FormModule on the app module

            This insure directive is all over


          #Pipes
            specify pipe character  |
            pipe name
            pipe parameters
                - separated with colons
                     <td>{{product.price | currency: 'DKK':true:'1.2-2'}}</td>
