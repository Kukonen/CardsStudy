const authModel = new AuthModel();

test( 'test validate', () => {
        expect(authModel.validate("super@mail.ry")).toBe(true);
    }
)