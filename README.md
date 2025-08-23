# SSED

a3a9170fe532c3724c979121324e74dbf3e004af8ab59a1517573cb2aa90ff9a

# TO DO

> Write contract for batch and overflow sales - DONE
> Create backend with mongo db. - DONE
> Create batch and overflow model
> Save wallet connection state
> Zod for form submission
> Understading observables

# RESTRICTIONS

> Users can't buy twice.
> Amount to withdraw currently, can only be calculated on the front end side.

# REQUIREMENTS

> Use Zod for form validation
> Store app and connection state to ease use and persist on refresh
> Create a backend api with express and mongodb to store other sale information

solution trial

<!-- there will be a witness that returns the user withdrawable amount. If it is equal to 0, it return an error message else it send the token amount returned by the witness.  -->

> create a hash of the user's pk and the value. Before they can withdraw, they would have to provide the thw amount they want to withdraw - worked
